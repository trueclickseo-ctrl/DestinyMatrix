import * as ftp from 'basic-ftp';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

dotenv.config({ path: path.join(process.cwd(), 'files/.env') });

const rawHost = process.env.FTP_HOST || '';
const host = rawHost.replace(/^ftp:\/\//, '');
const user = process.env.FTP_USERNAME;
const password = process.env.FTP_PASSWORD;
const port = parseInt(process.env.FTP_PORT || '21', 10);

const PHP_EXTRACTOR = `<?php
ini_set('memory_limit', '1024M');
ini_set('max_execution_time', 600);

$zipFile = __DIR__ . '/deploy-pack.zip';
$extractPath = __DIR__;

if (!file_exists($zipFile)) {
    http_response_code(404);
    echo "ERROR: deploy-pack.zip not found.";
    exit;
}

$zip = new ZipArchive;
$res = $zip->open($zipFile);
if ($res === TRUE) {
    $zip->extractTo($extractPath);
    $zip->close();
    @unlink($zipFile);
    @unlink(__DIR__ . '/test_ping.php');
    echo "EXTRACTION_SUCCESS";
} else {
    http_response_code(500);
    echo "ERROR: Failed to open zip file. Code: " . $res;
}
?>`;

async function getClient() {
  const client = new ftp.Client(180000); // 3 min timeout
  client.ftp.verbose = true;
  await client.access({ host, port, user, password, secure: false, useEPSV: false });
  return client;
}

async function runAtomicDeploy() {
  console.log('===========================================================');
  console.log('       SOULIOGRAPHY ATOMIC HIGH-SPEED DEPLOYMENT           ');
  console.log('===========================================================\n');

  const zipPath = path.join(process.cwd(), 'deploy-pack.zip');
  if (!fs.existsSync(zipPath)) {
    throw new Error('deploy-pack.zip does not exist. Please compress dist first.');
  }

  const stat = fs.statSync(zipPath);
  console.log(`[1/4] Found deploy-pack.zip (${Math.round(stat.size / 1024 / 1024)} MB). Connecting to FTP...`);

  const client = await getClient();

  try {
    await client.cd('/public_html');

    // 1. Upload extract_deploy.php
    console.log('[2/4] Uploading server extraction script...');
    const Readable = (await import('stream')).Readable;
    const s = new Readable();
    s.push(PHP_EXTRACTOR);
    s.push(null);
    await client.uploadFrom(s, 'extract_deploy.php');
    console.log('  ✓ extract_deploy.php uploaded.\n');

    // 2. Upload deploy-pack.zip
    console.log('[3/4] Uploading deploy-pack.zip package...');
    await client.uploadFrom(zipPath, 'deploy-pack.zip');
    console.log('  ✓ deploy-pack.zip uploaded successfully.\n');
  } finally {
    client.close();
  }

  // 3. Trigger remote extraction
  console.log('[4/4] Triggering remote server extraction (ZipArchive)...');
  const res = await fetch('https://souliography.com/extract_deploy.php');
  const resultText = await res.text();
  console.log(`Server response (HTTP ${res.status}):`, resultText);

  if (!resultText.includes('EXTRACTION_SUCCESS')) {
    throw new Error(`Extraction failed: ${resultText}`);
  }

  // 4. Delete extractor script via FTP
  console.log('\nCleaning up server temporary scripts...');
  const cleanupClient = await getClient();
  try {
    await cleanupClient.cd('/public_html');
    try { await cleanupClient.remove('extract_deploy.php'); } catch (_) {}
    try { await cleanupClient.remove('test_ping.php'); } catch (_) {}
    console.log('  ✓ Server cleaned up.');
  } finally {
    cleanupClient.close();
  }

  console.log('\n===========================================================');
  console.log('🎉 ATOMIC HIGH-SPEED PRODUCTION DEPLOYMENT COMPLETE!');
  console.log('===========================================================\n');
}

runAtomicDeploy().catch(err => {
  console.error('Fatal Deployment Error:', err.message);
  process.exit(1);
});

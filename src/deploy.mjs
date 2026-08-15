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

async function createClient() {
  const client = new ftp.Client(60000);
  client.ftp.verbose = false;
  await client.access({ host, port, user, password, secure: false, useEPSV: false });
  return client;
}

async function uploadDirWithRetry(client, localDir, remoteSubDir, maxRetries = 3) {
  let attempt = 0;
  while (attempt < maxRetries) {
    attempt++;
    try {
      await client.cd('/public_html');
      await client.ensureDir(remoteSubDir);
      await client.uploadFromDir(localDir, remoteSubDir);
      return;
    } catch (err) {
      console.warn(`    ⚠️ Upload attempt ${attempt} for ${remoteSubDir} failed: ${err.message}. Retrying...`);
      try { client.close(); } catch (_) {}
      await new Promise(r => setTimeout(r, 2000 * attempt));
      client = await createClient();
    }
  }
  throw new Error(`Failed to upload ${remoteSubDir} after ${maxRetries} attempts.`);
}

async function deployFullProduction() {
  const distDir = path.join(process.cwd(), 'dist');
  console.log('===========================================================');
  console.log('     STARTING ROBUST FULL-SITE FTP DEPLOYMENT              ');
  console.log('===========================================================\n');

  let client = await createClient();

  try {
    // 1. Upload _astro assets
    console.log('[1/4] Uploading _astro/ CSS and JS asset bundles...');
    await uploadDirWithRetry(client, path.join(distDir, '_astro'), '_astro');
    console.log('  ✓ _astro/ uploaded successfully.\n');

    // 2. Upload root files (index.html, sitemaps, robots, icons)
    console.log('[2/4] Uploading root static assets...');
    await client.cd('/public_html');
    const rootFiles = fs.readdirSync(distDir).filter(f => !fs.statSync(path.join(distDir, f)).isDirectory());
    for (const file of rootFiles) {
      await client.uploadFrom(path.join(distDir, file), file);
    }
    console.log(`  ✓ ${rootFiles.length} root static files uploaded successfully.\n`);

    // 3. Upload localized directories in batches
    const items = fs.readdirSync(distDir);
    const localeDirs = items.filter(item => {
      const itemPath = path.join(distDir, item);
      return fs.statSync(itemPath).isDirectory() && item !== '_astro';
    });

    console.log(`[3/4] Uploading ${localeDirs.length} localized directories...`);
    for (let i = 0; i < localeDirs.length; i++) {
      const loc = localeDirs[i];
      const locPath = path.join(distDir, loc);
      console.log(`  [${i + 1}/${localeDirs.length}] Uploading /${loc}/...`);
      try {
        await uploadDirWithRetry(client, locPath, loc);
        console.log(`    ✓ /${loc}/ uploaded.`);
      } catch (err) {
        console.error(`    ❌ Failed /${loc}/:`, err.message);
        // Refresh client before continuing to next locale
        try { client.close(); } catch (_) {}
        client = await createClient();
      }
    }

    console.log('\n[4/4] Finalizing deployment...');
    console.log('\n===========================================================');
    console.log('🎉 FULL PRODUCTION DEPLOYMENT FINISHED!');
    console.log('===========================================================\n');
  } finally {
    try { client.close(); } catch (_) {}
  }
}

deployFullProduction().catch(err => {
  console.error('Fatal deployment error:', err);
  process.exit(1);
});

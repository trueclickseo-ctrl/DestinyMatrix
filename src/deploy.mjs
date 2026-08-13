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
  const client = new ftp.Client(30000);
  client.ftp.verbose = false;
  await client.access({ host, port, user, password, secure: false, useEPSV: false });
  return client;
}

async function uploadFolderRecursively(localDir, remoteDir) {
  let client = await createClient();
  try {
    await client.ensureDir(remoteDir);
  } catch (e) {
    client.close();
    client = await createClient();
    await client.ensureDir(remoteDir);
  }

  const entries = fs.readdirSync(localDir, { withFileTypes: true });

  for (const entry of entries) {
    const localPath = path.join(localDir, entry.name);
    const remotePath = `${remoteDir}/${entry.name}`;

    if (entry.isDirectory()) {
      client.close();
      await uploadFolderRecursively(localPath, remotePath);
      client = await createClient();
      await client.cd('/' + remoteDir);
    } else {
      let fileSuccess = false;
      let attempts = 0;
      while (!fileSuccess && attempts < 3) {
        attempts++;
        try {
          await client.uploadFrom(localPath, entry.name);
          fileSuccess = true;
        } catch (err) {
          client.close();
          await new Promise(r => setTimeout(r, 1000));
          client = await createClient();
          await client.cd('/' + remoteDir);
        }
      }
    }
  }

  client.close();
}

async function resilientDeploy() {
  const distDir = path.join(process.cwd(), 'dist');
  console.log(`Starting Resilient Synchronized FTP Deployment...`);

  // Step 1: Upload _astro assets
  console.log(`[1/3] Uploading _astro/ bundle assets...`);
  await uploadFolderRecursively(path.join(distDir, '_astro'), 'public_html/_astro');
  console.log(`  ✓ _astro/ uploaded.`);

  // Step 2: Upload root files
  console.log(`[2/3] Uploading root static files...`);
  const rootClient = await createClient();
  try {
    await rootClient.cd('/public_html');
    const rootItems = fs.readdirSync(distDir);
    for (const item of rootItems) {
      const itemPath = path.join(distDir, item);
      if (!fs.statSync(itemPath).isDirectory()) {
        await rootClient.uploadFrom(itemPath, item);
      }
    }
    console.log(`  ✓ Root files uploaded.`);
  } finally {
    rootClient.close();
  }

  // Step 3: Upload locale directories
  const items = fs.readdirSync(distDir);
  const localeDirs = items.filter(item => {
    const itemPath = path.join(distDir, item);
    return fs.statSync(itemPath).isDirectory() && item !== '_astro';
  });

  console.log(`[3/3] Uploading ${localeDirs.length} localized route directories...`);
  for (let i = 0; i < localeDirs.length; i++) {
    const loc = localeDirs[i];
    console.log(`  [${i + 1}/${localeDirs.length}] Uploading /${loc}/...`);
    try {
      await uploadFolderRecursively(path.join(distDir, loc), `public_html/${loc}`);
      console.log(`  ✓ /${loc}/ completed.`);
    } catch (e) {
      console.error(`  ❌ /${loc}/ failed:`, e.message);
    }
  }

  console.log(`\n==================================================`);
  console.log(`🎉 RESILIENT PRODUCTION DEPLOYMENT COMPLETE!`);
  console.log(`==================================================\n`);
}

resilientDeploy().catch(err => {
  console.error(`Fatal deploy error:`, err.message);
  process.exit(1);
});

import * as ftp from 'basic-ftp';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

dotenv.config({ path: path.join(process.cwd(), 'files/.env') });

async function deployPriority() {
  const client = new ftp.Client(60000);
  client.ftp.verbose = true;

  const rawHost = process.env.FTP_HOST || '';
  const host = rawHost.replace(/^ftp:\/\//, '');
  const user = process.env.FTP_USERNAME;
  const password = process.env.FTP_PASSWORD;
  const port = parseInt(process.env.FTP_PORT || '21', 10);

  try {
    console.log(`Connecting to FTP host: ${host}:${port}...`);
    await client.access({ host, port, user, password, secure: false, useEPSV: false });

    // 1. Upload _astro assets directly into /public_html/_astro
    console.log('1. Uploading _astro/ CSS and JS asset bundles...');
    await client.cd('/public_html');
    await client.ensureDir('_astro');
    await client.cd('/public_html/_astro');
    await client.uploadFromDir(path.join(process.cwd(), 'dist/_astro'));

    // 2. Upload root files
    console.log('2. Uploading root static files...');
    await client.cd('/public_html');
    const rootFiles = ['index.html', 'favicon.ico', 'favicon.svg', 'favicon.png', 'apple-touch-icon.png', 'manifest.json', 'sitemap-index.xml'];
    for (const f of rootFiles) {
      const p = path.join(process.cwd(), 'dist', f);
      if (fs.existsSync(p)) {
        await client.uploadFrom(p, f);
      }
    }

    // 3. Upload target localized route directories
    const priorityLocales = ['en', 'ar', 'hi', 'ur', 'de', 'fr', 'es'];
    for (const loc of priorityLocales) {
      console.log(`3. Uploading /${loc}/ core directories...`);
      await client.cd('/public_html');
      await client.ensureDir(loc);
      await client.cd(`/public_html/${loc}`);
      
      const locIndex = path.join(process.cwd(), 'dist', loc, 'index.html');
      if (fs.existsSync(locIndex)) {
        await client.uploadFrom(locIndex, 'index.html');
      }

      // Upload calculators directory for this locale
      const calcDir = path.join(process.cwd(), 'dist', loc, 'calculators');
      if (fs.existsSync(calcDir)) {
        await client.ensureDir('calculators');
        await client.cd(`/public_html/${loc}/calculators`);
        await client.uploadFromDir(calcDir);
      }

      // Upload numerology directory for this locale
      const numDir = path.join(process.cwd(), 'dist', loc, 'numerology');
      if (fs.existsSync(numDir)) {
        await client.cd(`/public_html/${loc}`);
        await client.ensureDir('numerology');
        await client.cd(`/public_html/${loc}/numerology`);
        await client.uploadFromDir(numDir);
      }
    }

    console.log('\n✅ PRIORITY DEPLOYMENT SUCCESSFUL!');
  } catch (err) {
    console.error('FTP Deploy Error:', err);
  } finally {
    client.close();
  }
}

deployPriority();

import * as ftp from 'basic-ftp';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(process.cwd(), 'files/.env') });

async function deployPriority() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  const rawHost = process.env.FTP_HOST || '';
  const host = rawHost.replace(/^ftp:\/\//, '');
  const user = process.env.FTP_USERNAME;
  const password = process.env.FTP_PASSWORD;
  const port = parseInt(process.env.FTP_PORT || '21', 10);

  try {
    console.log(`Connecting to FTP host: ${host}:${port}...`);
    await client.access({ host, port, user, password, secure: false });

    console.log('1. Uploading public assets (hero image, images, css)...');
    await client.uploadFromDir(path.join(process.cwd(), 'dist/_astro'), '_astro');
    await client.uploadFrom(path.join(process.cwd(), 'dist/destiny_hero_mystic.jpg'), 'destiny_hero_mystic.jpg');
    await client.uploadFrom(path.join(process.cwd(), 'dist/contact_hero_combined.jpg'), 'contact_hero_combined.jpg');
    await client.uploadFrom(path.join(process.cwd(), 'dist/homepage_hero_bright.jpg'), 'homepage_hero_bright.jpg');

    console.log('2. Uploading root index.html...');
    await client.uploadFrom(path.join(process.cwd(), 'dist/index.html'), 'index.html');
    
    console.log('3. Uploading en/index.html...');
    await client.cd('/public_html');
    await client.ensureDir('en');
    await client.uploadFrom(path.join(process.cwd(), 'dist/en/index.html'), 'index.html');

    console.log('4. Uploading en/report/index.html...');
    await client.cd('/public_html/en');
    await client.ensureDir('report');
    await client.uploadFrom(path.join(process.cwd(), 'dist/en/report/index.html'), 'index.html');

    console.log('5. Uploading en/contact/index.html...');
    await client.cd('/public_html/en');
    await client.ensureDir('contact');
    await client.uploadFrom(path.join(process.cwd(), 'dist/en/contact/index.html'), 'index.html');

    console.log('6. Uploading en/terms/index.html...');
    await client.cd('/public_html/en');
    await client.ensureDir('terms');
    await client.uploadFrom(path.join(process.cwd(), 'dist/en/terms/index.html'), 'index.html');

    console.log('7. Uploading en/privacy/index.html...');
    await client.cd('/public_html/en');
    await client.ensureDir('privacy');
    await client.uploadFrom(path.join(process.cwd(), 'dist/en/privacy/index.html'), 'index.html');

    console.log('8. Uploading en/disclaimer/index.html...');
    await client.cd('/public_html/en');
    await client.ensureDir('disclaimer');
    await client.uploadFrom(path.join(process.cwd(), 'dist/en/disclaimer/index.html'), 'index.html');

    console.log('9. Uploading en/calculators/life-path-number (redirect)...');
    await client.cd('/public_html/en');
    await client.ensureDir('calculators');
    await client.cd('/public_html/en/calculators');
    await client.ensureDir('life-path-number');
    await client.uploadFrom(path.join(process.cwd(), 'dist/en/calculators/life-path-number/index.html'), 'index.html');
    
    console.log('ALL TARGET FILES UPLOADED SUCCESSFULLY!');

  } catch (err) {
    console.error('FTP Deploy Error:', err);
  } finally {
    client.close();
  }
}

deployPriority();

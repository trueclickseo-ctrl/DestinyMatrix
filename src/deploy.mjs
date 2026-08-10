import * as ftp from 'basic-ftp';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(process.cwd(), 'files/.env') });

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  const rawHost = process.env.FTP_HOST || '';
  const host = rawHost.replace(/^ftp:\/\//, '');
  const user = process.env.FTP_USERNAME;
  const password = process.env.FTP_PASSWORD;
  const port = parseInt(process.env.FTP_PORT || '21', 10);
  const remoteDir = process.env.FTP_REMOTE_DIR || 'public_html';

  if (!host || !user || !password) {
    console.error('FTP Credentials missing from .env');
    process.exit(1);
  }

  try {
    console.log(`Connecting to FTP host: ${host}:${port}...`);
    await client.access({
      host,
      port,
      user,
      password,
      secure: false,
    });

    console.log(`Uploading dist/ contents to root directory...`);
    // Ensure we upload to current directory without creating nested public_html
    await client.uploadFromDir(path.join(process.cwd(), 'dist'));
    console.log('Deploy completed successfully!');
  } catch (err) {
    console.error('FTP Deployment Error:', err);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();

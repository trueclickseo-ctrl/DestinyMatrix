import * as ftp from 'basic-ftp';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(process.cwd(), 'files/.env') });

const rawHost = process.env.FTP_HOST || '';
const host = rawHost.replace(/^ftp:\/\//, '');
const user = process.env.FTP_USERNAME;
const password = process.env.FTP_PASSWORD;
const port = parseInt(process.env.FTP_PORT || '21', 10);

async function main() {
  const client = new ftp.Client(30000);
  client.ftp.verbose = true;
  await client.access({ host, port, user, password, secure: false, useEPSV: false });
  try {
    await client.cd('/public_html');
    const testPhp = '<?php echo "PHP_EXECUTION_OK"; ?>';
    const stream = Buffer.from(testPhp, 'utf-8');
    const Readable = (await import('stream')).Readable;
    const s = new Readable();
    s.push(testPhp);
    s.push(null);
    await client.uploadFrom(s, 'test_ping.php');
    console.log('Uploaded test_ping.php successfully.');
  } finally {
    client.close();
  }
}

main();

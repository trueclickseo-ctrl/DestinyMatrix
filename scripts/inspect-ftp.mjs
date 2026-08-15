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

async function getClient() {
  const client = new ftp.Client(60000);
  client.ftp.verbose = true;
  await client.access({ host, port, user, password, secure: false, useEPSV: false });
  return client;
}

async function main() {
  const client = await getClient();
  try {
    console.log('--- Listing /public_html ---');
    const rootList = await client.list('/public_html');
    console.log('Root items:', rootList.map(i => `${i.name} (${i.type === 2 ? 'DIR' : 'FILE'})`).join(', '));

    console.log('\n--- Listing /public_html/_astro ---');
    const astroList = await client.list('/public_html/_astro');
    console.log('_astro items:', astroList.map(i => i.name).join(', '));
  } finally {
    client.close();
  }
}

main().catch(err => {
  console.error('FTP Error:', err);
  process.exit(1);
});

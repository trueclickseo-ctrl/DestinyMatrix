async function verifyLivePage() {
  console.log('===========================================================');
  console.log('    VERIFYING LIVE PRODUCTION PAGE & LINK HTTP HEADERS    ');
  console.log('===========================================================\n');

  const pageUrl = 'https://souliography.com/en/destiny-matrix/birthdays/january-1/';
  console.log(`[1] Fetching live page: ${pageUrl}`);
  
  const pageRes = await fetch(pageUrl);
  console.log(`Page Status Code: ${pageRes.status} ${pageRes.statusText}`);
  console.log('Page Response Headers:');
  pageRes.headers.forEach((val, key) => console.log(`  ${key}: ${val}`));

  const html = await pageRes.text();

  // Extract the 3 "Explore Related Guides & Tools" links from HTML
  const linkRegex = /href=["'](https?:\/\/souliography\.com\/en\/[^"']*)["']/g;
  let match;
  const links = new Set();
  while ((match = linkRegex.exec(html)) !== null) {
    links.add(match[1]);
  }

  console.log(`\nFound ${links.size} /en/ outbound links on live page.`);

  const targetLinks = [
    'https://souliography.com/en/destiny-matrix/arcana/1-the-magician/',
    'https://souliography.com/en/destiny-matrix/arcana/',
    'https://souliography.com/en/'
  ];

  console.log('\n[2] Verifying 3 target "Explore Related Guides & Tools" links over network:');
  
  for (const link of targetLinks) {
    console.log(`\n--- Fetching: ${link} ---`);
    const res = await fetch(link, { method: 'HEAD' });
    console.log(`Status: ${res.status} ${res.statusText}`);
    console.log('Headers:');
    res.headers.forEach((val, key) => console.log(`  ${key}: ${val}`));
  }

  // Check double locale pattern on live page HTML
  const doubleLocaleMatch = html.match(/\/en\/en\//);
  if (doubleLocaleMatch) {
    console.error('\n❌ ERROR: Double-locale /en/en/ pattern STILL PRESENT in live HTML!');
    process.exit(1);
  } else {
    console.log('\n✅ VERIFIED: Zero /en/en/ double-locale patterns present in live HTML!');
  }
}

verifyLivePage().catch(err => {
  console.error('Error during live verification:', err);
  process.exit(1);
});

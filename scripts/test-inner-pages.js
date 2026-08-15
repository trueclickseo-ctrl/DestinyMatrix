async function testInnerPages() {
  const urls = [
    'https://souliography.com/ar/calculators/vehicle-numerology/',
    'https://souliography.com/ar/destiny-matrix/birthdays/',
    'https://souliography.com/hi/calculators/life-path-number/',
    'https://souliography.com/en/calculators/'
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      const cssMatch = html.match(/href="(\/_astro\/[^"]+\.css)"/);
      console.log(`=== ${url} (HTTP ${res.status}) ===`);
      if (cssMatch) {
        const cssUrl = 'https://souliography.com' + cssMatch[1];
        const cssRes = await fetch(cssUrl);
        console.log(`  CSS: ${cssUrl} -> Status: ${cssRes.status} (${cssRes.headers.get('content-type')})`);
      } else {
        console.log('  No CSS tag found');
      }
    } catch(e) {
      console.log(`Error testing ${url}: ${e.message}`);
    }
  }
}
testInnerPages();

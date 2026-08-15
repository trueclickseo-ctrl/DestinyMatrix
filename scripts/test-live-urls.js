async function testLive() {
  const urls = [
    'https://souliography.com/en/',
    'https://souliography.com/ar/',
    'https://souliography.com/hi/',
    'https://souliography.com/ur/'
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
      const hasDestiny = html.includes('Destiny Matrix') || html.includes('مصفوفة القدر');
      const hasSpecialty = html.includes('Specialty Calculators') || html.includes('حاسبات متخصصة');
      console.log(`  Footer check: Destiny Header: ${hasDestiny} | Specialty Calc Header: ${hasSpecialty}`);
    } catch(e) {
      console.log(`Error testing ${url}: ${e.message}`);
    }
  }
}
testLive();

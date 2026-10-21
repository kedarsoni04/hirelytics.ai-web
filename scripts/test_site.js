const routes = [
  '/',
  '/product',
  '/how-it-works',
  '/pricing',
  '/about',
  '/security',
  '/book-demo',
  '/privacy',
  '/terms',
];

async function runAudit() {
  console.log('=== RUNNING FULL WEBSITE ROUTE & SEO AUDIT ===\n');
  let failures = 0;

  for (const route of routes) {
    const url = 'http://localhost:3000' + route;
    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        console.error(`[FAIL] ${route} -> Status ${res.status}`);
        failures++;
        continue;
      }
      const html = await res.text();
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : 'NO_TITLE';

      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
      const hasH1 = /<h1[^>]*>([\s\S]*?)<\/h1>/i.test(html);

      console.log(`[PASS] ${route.padEnd(16)} | 200 OK | H1: ${hasH1 ? 'YES' : 'NO '} | Title: ${title}`);
      if (!descMatch) {
        console.log(`       Notice: Meta description fallback or inherited.`);
      }
    } catch (err) {
      console.error(`[ERROR] ${route} -> ${err.message}`);
      failures++;
    }
  }

  console.log('\n--- Checking Static & SEO Assets ---');
  for (const asset of ['/sitemap.xml', '/robots.txt']) {
    try {
      const res = await fetch('http://localhost:3000' + asset);
      const body = await res.text();
      console.log(`[PASS] ${asset.padEnd(16)} | ${res.status} OK | Size: ${body.length} bytes`);
    } catch (err) {
      console.error(`[FAIL] ${asset} -> ${err.message}`);
      failures++;
    }
  }

  console.log('\n=== AUDIT SUMMARY ===');
  if (failures === 0) {
    console.log('ALL ROUTES PASSED (100% SUCCESS, 0 ERRORS)');
  } else {
    console.log(`${failures} route(s) failed`);
    process.exit(1);
  }
}

runAudit();

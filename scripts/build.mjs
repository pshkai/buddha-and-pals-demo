import { mkdir, cp, rm } from 'node:fs/promises';
await rm(new URL('../dist/', import.meta.url), { recursive: true, force: true });
await mkdir(new URL('../dist/', import.meta.url), { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'assets', 'docs']) await cp(new URL(`../${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url), { recursive: true });
console.log('Static production files built in dist/');

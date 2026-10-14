import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve(process.cwd(), 'dist');
const mime = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.svg':'image/svg+xml', '.webp':'image/webp', '.md':'text/plain; charset=utf-8' };
http.createServer(async (req,res) => {
  try { const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); const file = resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`); if (!file.startsWith(root + sep)) throw Error('Invalid path'); await stat(file); res.writeHead(200, {'Content-Type':mime[extname(file)] || 'application/octet-stream'}); res.end(await readFile(file)); }
  catch { res.writeHead(404); res.end('Not found'); }
}).listen(4173, '127.0.0.1', () => console.log('Local: http://127.0.0.1:4173'));

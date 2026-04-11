import { createServer } from 'http';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const PORT = process.env.PORT || 3000;
const DIST_DIR = resolve('./frontend/dist');

const server = createServer((req, res) => {
  let filePath = resolve(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
  
  // For SPA routing, serve index.html for all routes
  if (!filePath.startsWith(DIST_DIR) || filePath.includes('..')) {
    filePath = resolve(DIST_DIR, 'index.html');
  }

  try {
    const content = readFileSync(filePath);
    const contentType = filePath.endsWith('.js') 
      ? 'application/javascript'
      : filePath.endsWith('.css')
      ? 'text/css'
      : filePath.endsWith('.json')
      ? 'application/json'
      : 'text/html';
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (err) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(readFileSync(resolve(DIST_DIR, 'index.html')));
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`Environment: production`);
});

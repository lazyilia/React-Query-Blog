import { writeFileSync } from 'fs';

const html = `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; URL=./index.html">
  </head>
  <body></body>
</html>`;

writeFileSync('./dist/404.html', html);
console.log('✅ 404.html created successfully in dist/');

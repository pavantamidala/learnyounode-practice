const http = require('http');
const port = process.argv[2];
const map = require('through2-map');
const fs = require('fs')
const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('Only POST requests are accepted\n');
  }
// const writableStream = fs.createWriteStream('./dummy.txt')
// req.pipe(process.stdout)
  req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(port);

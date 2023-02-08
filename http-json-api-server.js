const http = require("http");
const url = require("url");
const port = process.argv[2];

const server = http.createServer((req, res) => {
  // console.log(querystring.parse(req.url))
  const parsedUrl = url.parse(req.url, true);
  const date = new Date(parsedUrl.query["iso"]);
  let result;
  if (parsedUrl.pathname === "/api/parsetime") {
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
  }

  if (parsedUrl.pathname === "/api/unixtime") {
    result = {
      unixtime: date.getTime(),
    };
  }
  if (result) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(port);

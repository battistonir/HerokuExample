// run this from the command line using 'node index.js'
console.log("JavaScript outside the browser?!");
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(8080);

var http = require("http");
const { URL } = require("url");
var fs = require("fs");
var addmod = require("./addmod.js");
http
  .createServer(function (req, res) {
    var q = new URL(req.url, "https://localhost:8085/");
    var filename = "." + q.pathname;
    if (q.pathname == "/add.js") addmod.add(req, res, q.searchParams);
    else
      fs.readFile(filename, function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200); // Content-Type not included
        res.write(data);
        return res.end();
      });
  })
  .listen(8085);

const http = require("http");

http
  .createServer(function (req, res) {
    try {
      switch (req.url) {
        case '/ping' :
          res.writeHead(200, req.rawHeaders);
          console.log(req.headers);
          res.end();
          break;
        default :
          res.writeHead(404);
          res.write('404 Not Found');
          res.end();
      }
    }
    catch (err) {
      res.writeHead(500);
      res.write('500' + err);
      res.end()
    }
  })
  .listen((process.env.PING_LISTEN_PORT = '3000'), function() {
    console.log('Server start at http://localhost:' + process.env.PING_LISTEN_PORT);
  });
  
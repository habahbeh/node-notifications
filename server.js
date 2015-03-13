// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Welcome Mohammad habahbeh\n");
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});

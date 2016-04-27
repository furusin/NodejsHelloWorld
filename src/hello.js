var http = require('http');
var server = http.createServer();

server.on('request', function(req, res){
  res.writeHead('200', {'content-Type': 'text/plain'});
  res.write('hello world');
  res.end();
});

server.listen('1234', '192.168.56.1');
console.log('server listening...');

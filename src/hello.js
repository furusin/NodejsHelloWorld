var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var server = http.createServer();
var template = fs.readFileSync('./hello.ejs', 'utf-8');
var n = 0;
server.on('request', function(req, res){
  n++;
  var data = ejs.render(template, {
    title:"hello ",
    content:"<strong>World!</strong>",
    n:n
  });
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
});

server.listen('1234', '192.168.56.1');
console.log('server listening...');

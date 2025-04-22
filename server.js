const http = require('http');
const hostname = '127.0.0.1'



http.createServer(function(req,res) {

    res.writeHead(200, {'Content-Type':'application/json'});
    res.end('Hello child');
}).listen(8080);





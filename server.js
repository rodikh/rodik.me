var static = require('node-static');
var file = new static.Server('./');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        console.log('serving file', request.url);
        file.serve(request, response);
    }).resume();
}).listen(3000);

console.log('Listening on server 3000 -> 80');
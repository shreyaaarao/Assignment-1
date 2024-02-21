// Require http module
var http = require('http');

// Define the port number
var port = 8081; // Change the port number as needed

// Create server
http.createServer(function (req, res) {

    // HTTP Status: 200 : OK
    // Content Type: text/html
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // Send the response body as "Hello World!"
    res.end('Hi, This is my nodejs application!');

}).listen(port); // Specify the port to listen on

console.log('Server running at http://127.0.0.1:' + port + '/');

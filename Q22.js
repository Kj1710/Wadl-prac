const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((request, response) => {
    // Read the requested file
    fs.readFile('Q1.html', (err, data) => {
        if (err) {
            // Handle error if file not found
            response.writeHead(404, {'Content-Type': 'text/html'});
            return response.end("404 Not Found");
        }  
        // Send the requested file as response
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
    });
});

// Listen on port 8081
server.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');

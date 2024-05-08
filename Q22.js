7,29,30


const http = require('http');

const server = http.createServer((request, response) => {
  // Redirect to www.google.com
  response.writeHead(302, {
    'Location': 'http://www.google.com'
  });
  response.end();
});

const PORT = 8081;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

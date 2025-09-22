const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello from Node.js app\n');
};

// When run directly, start server. When required by tests, export server object.
if (require.main === module) {
  const server = http.createServer(requestHandler);
  server.listen(port, () => console.log(`Server listening on ${port}`));
} else {
  module.exports = http.createServer(requestHandler);
}

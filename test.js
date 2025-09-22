const assert = require('assert');
const http = require('http');
const server = require('./index');

server.listen(3000, () => {
  http.get('http://localhost:3000', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        assert.strictEqual(res.statusCode, 200);
        assert.ok(data.includes('Hello from Node.js app'));
        console.log('Test passed');
        server.close();
        process.exit(0);
      } catch (err) {
        console.error('Test failed', err);
        server.close();
        process.exit(1);
      }
    });
  }).on('error', (err) => {
    console.error('Request error', err);
    server.close();
    process.exit(1);
  });
});

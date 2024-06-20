const http = require('http');
const routeHandler = require('./routes/router');

// Create server
const server = http.createServer(routeHandler);

// Start server
const PORT = 3001;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

const http = require("http");

// Create an HTTP server that responds with "Hello, World!" to all requests.
const server = http.createServer((req, res) => {
  // Set the response header to indicate plain text content.
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the "Hello, World!" message as the response body.
  res.end("Hello, World!\n");
});

// Listen on port 3000 and a specific IP address.
server.listen(3000, "127.0.0.1", () => {
  // Callback function to execute when the server starts listening.
  console.log("HTTP server listening on port 3000");
});

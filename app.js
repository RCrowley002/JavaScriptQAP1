// Import the Express.js module
const express = require("express");

// Create an instance of the Express application
const app = express();

// Define a route that responds with "Hello, Express!"
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server and listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

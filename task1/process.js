// Access process information.
console.log("Process ID:", process.pid);
console.log("Node.js Version:", process.version);
console.log("Command Line Arguments:", process.argv);

// Read input from the user and display it.
process.stdin.setEncoding("utf8");
console.log("Enter your name: ");

// Event handler for data received from standard input (keyboard).
process.stdin.on("data", (data) => {
  // Display a personalized greeting based on user input.
  console.log("Hello, " + data);

  // Exit the application after reading input.
  process.exit();
});

// Handle termination signals (e.g., Ctrl+C to stop the program).
process.on("SIGINT", () => {
  console.log("Received SIGINT signal. Exiting...");
  process.exit();
});

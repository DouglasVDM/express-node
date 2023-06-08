// Load HTTP module
const http = require("http");
const { type } = require("os");
require("dotenv").config();

const hostname = "127.0.0.1";
let PORT = process.env.PORT;

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content
    type
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body "Hello World"
    res.end("Hello World\n");
});

// Prints a log once the server starts listening
server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}`);
});
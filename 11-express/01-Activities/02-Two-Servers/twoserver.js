// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
let portA = 7000;
let portB = 7500;

// Create a generic function to handle requests and responses
function handleRequestA(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end("You are what you eat: " + request.url);
}
function handleRequestB(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end("When life gives you lemons make lemonade: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverA = http.createServer(handleRequestA);

var serverB = http.createServer(handleRequestB);

// Start our server so that it can begin listening to client requests.
serverA.listen(portA, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + portA);
});
serverB.listen(portB, () => {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + portB);
});

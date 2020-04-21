const http = require('http');

const server = http.createServer( (request, response) => {
  console.log('Request reached the server');

  if (request.url === '/') {         //  domain.com

    response.write('<h1>HOME PAGE</h1>'); // Sets the body of the reponse
    response.end(); // Send back the response and end the request/response cycle 
  }
  else if (request.url === '/about') {   //  domain.com/about

    response.write('<h1>ABOUT PAGE</h1>'); // Sets the body of the reponse
    response.end(); // Send back the response and end the request/response cycle 
  }
  else {                        //  domain.com/*

    response.statusCode = 404;
    response.write('<h1>404 PAGE</h1>'); // Sets the body of the reponse
    response.end(); // Send back the response and end the request/response cycle 
  }

});

// 80 Default HTTP protocol
// 443 Default HTTPS protocol

// Start the server
server.listen(3000, () => {
  console.log('Server is running at port 3000');
})
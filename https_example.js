// Lighthouse lab - W1D6 - HTTP Client exercise //

var https = require('https');

console.log("I did it!");

var options = {
  host: 'www.example.org',
  path: '/'
};

// called by the https when the request is made.
var callback = function(response) {
  console.log("In response handler callback!");

  response.on('data', function(chunk) {
    console.log("[-- CHUNK OF LENGTH " + chunk.length + " --}");
    console.log(chunk.toString());
  });


}

console.log("I'm about to make the resquest!");

https.request(options, callback).end();

console.log("I've made the request!");
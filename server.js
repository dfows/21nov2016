// the first thing is to require the http module

var port = process.env.PORT || 5000; // deploy what

var http = require('http');
var url = require('url');

function serve(route) {
  http.createServer(function(req, res) {
    var postText = "";
    var pathname = url.parse(req.url).pathname;
    req.addListener("data", function(chunk) {
      postText += chunk;
    });
    req.addListener("end", function() {
      route(pathname, res, postText);
    });
  }).listen(port); // goddammit i have to deploy this
}

exports.serve = serve;

function route(pathname, res, data) {
  // hardcodin my routes because fu that's why
  if (pathname === "/") {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("please POST to /echo");
  } else if (pathname === "/echo") {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("echoing: " + data + "\n");
  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("404, bitch");
  }
  res.end();
}

exports.route = route;

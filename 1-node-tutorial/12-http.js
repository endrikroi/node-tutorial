const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is the about section");
  }
  res.end(`<h1>Ooooooops</h1>
  <p>We can not find the page you are looking for</p>`);
});

server.listen(5000);
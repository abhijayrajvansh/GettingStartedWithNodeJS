const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if(req.url === '/favicon.ico') return res.end();

  const myurl = url.parse(req.url, true)
  console.log(myurl)

  switch (myurl.pathname) {
    case '/':
      res.end('homepage')
      break;
    case '/about':
      const username = myurl.query.myname;
      res.end(`hi, ${username}`)
      break;
    default:
      res.end("404 not found");
  }

});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server started on port ${PORT}...`)
})
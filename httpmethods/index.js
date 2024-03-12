const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} - method:${req.method} and request received from ${req.url}\n`
  
  fs.appendFile("./log.txt", log, () =>{
    switch (req.url) {
      case '/':
        res.end('homepage')
        break;
      case '/about':
        res.end('about page');
        break;
      default:
        res.end('404')
    }
  })
})

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running on ${PORT}...`)
})
 
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${Date.now()}: request received from ${req.url}\n`
  fs.appendFile("./log.txt", log, (err, data) => {
    switch(req.url) {
      case "/":
        res.end("homepage")
        break
      case "/about":
        res.end("road to best software engineer in the world")
        break;
      default:
        res.end("404 not found")

    }
  })
});

const PORT = 8000

server.listen(PORT, () => {
  console.log(`server started on ${PORT}...`)
});
const fs = require("fs")


// to create a file in a synchronous manner..
fs.writeFileSync("./syncFile.txt", "created using sync fn")

// to create a file in a asynchronous manner..
fs.writeFile("./asyncFile.txt", "created using async fn", (err) => {})

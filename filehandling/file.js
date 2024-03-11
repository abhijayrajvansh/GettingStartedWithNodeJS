const fs = require("fs")

// to create a file in a synchronous manner..
const res = fs.writeFileSync("./syncFile.txt", "created using sync fn")

// to create a file in a asynchronous manner.. always require a callback function to handle error and result
fs.writeFile("./asyncFile.txt", "created using async fn", (err) => {})

// again using asynch function with a callback
fs.readFile("./contact.txt", "utf-8", (err, result) => {
  if(err) {
    console.log("error", err)
  }
  else {
    console.log(result)
  }
})


fs.appendFileSync("./newFile.txt", `new line ${Date.now()}\n`)
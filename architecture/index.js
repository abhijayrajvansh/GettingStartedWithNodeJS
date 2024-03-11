const fs = require("fs");
console.log(`executing index ... \n`);

//synchronous or blocking code
console.log('start')

const res = fs.readFileSync("./data.txt", "utf-8");
console.log(res)

console.log('end')

console.log('')

//asynchronous or non-blocking code
console.log('start')

fs.readFile("data.txt", "utf-8", (err, asyncRes) => {
  console.log(asyncRes)
})

console.log('end')
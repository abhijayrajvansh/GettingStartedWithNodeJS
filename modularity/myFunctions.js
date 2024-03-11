function greet(n) {
  console.log('hello,', n)
}

function add(a, b) {
  return a + b;
}

function sub (a, b) {
  return a - b;
}

// destructuring
module.exports = {
  greet, add, sub
};
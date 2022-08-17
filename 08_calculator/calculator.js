const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, n) => total + n, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, n) => product * n, 1);
};

const power = function(n, p) {
  return n ** p;
};

const factorial = function(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

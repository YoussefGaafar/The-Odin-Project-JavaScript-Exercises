const add = function (...args) {
  return args.reduce((accumulator, arg) => {
    return accumulator + parseInt(arg);
  }, 0);
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (args) {
  return args.reduce((accumulator, arg) => {
    return accumulator + parseInt(arg);
  }, 0);
};

const multiply = function (args) {
  return args.reduce((accumulator, arg) => {
    return accumulator * parseInt(arg);
  }, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
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

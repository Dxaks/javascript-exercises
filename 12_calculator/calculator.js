const add = function(num1, num2) {
	let add = num1 + num2;
  return add;
};


const subtract = function(num1, num2) {
  let sub = num1 - num2;
  return sub;
};


const sum = function(arr) {
  return arr.reduce((a, b) => {
   return a + b;
  },0)
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b)
};

const power = function(a, b) {
  return a**b
};

const factorial = function(n) {
  if(n == 0) n = n + 1;
  let arr = [];
  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }
  return arr.reduce((a, b) => a * b)
};
console.log(factorial(20))

 
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

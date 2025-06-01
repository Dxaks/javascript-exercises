const removeFromArray = function(a, ...args) {
  // Check if the first argument is an array
  if (!Array.isArray(a)) {
    throw new TypeError('First argument must be an array');
  }

  // Filter the array to remove elements that match any of the arguments
  return a.filter(item => !args.includes(item));

  
};

console.log(removeFromArray([1, 2, 3, 4], 5, 7)); // [1, 4]
// Do not edit below this line
module.exports = removeFromArray;

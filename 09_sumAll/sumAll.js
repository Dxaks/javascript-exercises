const sumAll = function(min, max) {
    if(!Number.isInteger(min) || !Number.isInteger(max)) return "Error";

    if(min < 0 || max < 0) return "Error";


    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(1, 2));

// Do not edit below this line
module.exports = sumAll;

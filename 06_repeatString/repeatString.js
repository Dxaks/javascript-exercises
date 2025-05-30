// const Guest = Math.floor(Math.random() * 500);


const repeatString = function(message, times) {
 let greet = ''
 
 for (let i = 0; i < times; i++) {
    greet += message;
 }
 return greet
};

console.log(repeatString('Hello', 3))

// Do not edit below this line
module.exports = repeatString;

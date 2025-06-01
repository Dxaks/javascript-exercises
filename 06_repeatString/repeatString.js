// const Guest = Math.floor(Math.random() * 500);


const repeatString = function(message, times) {
 let greet = ''

//  return 'ERROR' if times is negative
   if (times < 0) {
      return 'ERROR';
   }
//  return an empty string if times is 0
   if (times === 0) {
         return '';
      }
      
 for (let i = 0; i < times; i++) {
    greet += message;
 }
 return greet
};

// Do not edit below this line
module.exports = repeatString;

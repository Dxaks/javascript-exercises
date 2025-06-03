const getleapYears = function() {

    const startYear = function() {
        let start = prompt('enter the starting year')
        return parseInt(start.trim());
}

    const endYear = function() {
        let end = prompt('enter the ending year')
        return parseInt(end.trim());
}

    let start = startYear();
    let end = endYear();

    if (isNaN(start) || isNaN(end)) {
        console.log('Please enter valid numbers for the years.');
        return;
    }

    console.log(`Leap years between ${start} and ${end}:`);

for (let i = start; i <= end; i++) {

  if((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0))
    console.log(i)
};

};

getleapYears();



// Do not edit below this line
module.exports = leapYears;

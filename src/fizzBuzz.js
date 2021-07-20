function fizzBuzz(num) {
    if(num === 15) {
        return "FizzBuzz";
    }

    if(num % 3 === 0) {
        return 'Fizz';
    } 
    
    if(num % 5 === 0) {
        return 'Buzz';
    }

    return num;
};

module.exports = { fizzBuzz };
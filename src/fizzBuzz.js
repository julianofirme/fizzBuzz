function fizzBuzz(num) {
    if(num % 3 === 0) {
        return 'Fizz';
    } 
    
    if(num % 5 === 0) {
        return 'Buzz';
    }

    return num;
};

module.exports = { fizzBuzz };
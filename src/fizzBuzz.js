function fizzBuzz(num) {
    if(num % 3 === 0) {
        if(num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz";
        }

        return 'Fizz';
    } 
    
    if(num % 5 === 0) {
        return 'Buzz';
    }

    return num;
};

module.exports = { fizzBuzz };
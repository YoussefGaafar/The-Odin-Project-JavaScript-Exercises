const fibonacci = function (n) {
    if (n == 0) {
        return 0;
    }

    else if (n == 1 || n == 2) {
        return 1;
    }

    else if (Number(n) < 0) {
        return 'OOPS';
    }

    let firstPrev = 1;
    let secondPrev = 0;
    //Fibonacci Series...
    for (let i = 2; i <= Number(n); i++) {
        let temp = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = temp;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;

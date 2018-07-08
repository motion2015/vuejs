const MathLibary = {
    multiplyTowNumbers(a, b) {
    // multiplyTowNumbers(...rest) {
        // return a * b
        // return this.multiply(...rest)
        return this.multiply(a, b)
    },
    multiply(...rest) {
        return rest.reduce((total, elem) => total * elem, 1)
    }
};

const a= MathLibary.multiplyTowNumbers(4, 5)
console.log(a);

const b= MathLibary.multiply(4, 5, 7)
console.log(b);



// Refactor


// Rest operator
function product(a, b, c, d, e) {
    var numbers = [a, b, c, d, e]

    return numbers.reduce(function (acc, number) {
        return acc * number
    }, 1)
}

function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array)
}

// Spread operator
function join(array1, array2) {
    return array1.concat(array2)
}


// Rest operator
function product(...rest) {
    rest.reduce((acc, number) => acc * number, 1)
}

function unshift(array, ...rest) {
    return rest.concat(array)
}

function unshift(array, ...rest) {
    return [rest, ...array]
}

// Spread operator
function join(array1, array2) {
    [...array1, ...array2]
}
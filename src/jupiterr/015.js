// Rest parameters

function adder(a, b, c, d, e) {
    const numbers = [a, b, c, d, e];
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0)
}

const a = adder(1, 2, 3, 4, 5);
console.log(a)

function adder2(numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0)
}

const b = adder2([1, 2, 3, 4, 5]);
console.log(b)


function adder3(...c) {
    return c.reduce((sum, number) => {
        return sum + number;
    }, 0)
}

const d = adder2([1, 2, 3, 4, 5,7878, 909090]);
console.log(d)
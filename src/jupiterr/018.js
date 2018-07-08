let empolyee = {
    name: 'Superman',
    type: 'hero',
    hourlyPayment: 1000
}

// var type = empolyee.type;
// var hourlyPayment = empolyee.hourlyPayment

const {name, type, hourlyPayment } = empolyee;

console.log(type)
console.log(hourlyPayment)


function priceOfHero(arg) {
    console.log(`${name} is a ${type} employee with hourly payment of ${hourlyPayment}`)
}

priceOfHero(empolyee);
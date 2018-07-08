let numbers = [ 1, 2, 3, 4, 5 ];
let doubledNumbers = [];

// imperative = mutable


// state is a value of a variable at a moment.

// declarative = immutable
doubledNumbers = numbers.map(item => item *2)

console.log(doubledNumbers)



let images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' }
];

let heights = images.map(item => item.height);

console.log(heights)


let trip = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
]

let speeds = trip.map(item => item.distance / item.time)

console.log(speeds)

let heroes = [
    { name: 'superman'},
    { name: 'batman'},
    { name: 'x-man'}
];

console.log(heroes.map(item => item.name));

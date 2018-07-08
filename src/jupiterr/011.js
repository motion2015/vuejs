const trips = [
    { distance: 34 },
    { distance: 90 },
    { distance: 59 }
]

let total = trips.reduce((prev, trip) => {
    return prev + trip.distance
}, 0)
console.log(total)
const heroes = [
    { name: 'superman', type: 'Flying' },
    { name: 'Batman', type: 'Flying' },
    { name: 'Ironman', type: 'Metal' },
    { name: 'x-man', type: 'Mutant' },
    { name: 'Antman', type: 'Insect' }
];

let types = heroes.reduce((prev, hero) =>{
    // if(hero.type=== 'Flying') {
    //     prev.Flying++
    // } else if(hero.type=== 'Metal') {
    //     prev.Metal++
    // }

    prev[hero.type]++;
    return prev;
}, { Flying: 0, Metal: 0, Mutant: 0, Insect: 0})

console.log(types)

const numbers = [ 1, 1, 2, 3, 4, 4 ];

let unique = numbers.reduce((prev, number) => {
    prev.includes(number)? prev : prev.push(number);
    return prev
}, [])

console.log(unique);

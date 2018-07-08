let heroes = [
    { balance: 10000, id: 1, name: 'superman', type: 'Flying', feePerMinL: 100},
    { balance: 7000, id: 6, name: 'superman', type: 'Flying', feePerMinL: 100},
    { balance: 8000, id: 2, name: 'Batman', type: 'Flying', feePerMinL: 120},
    { balance: 9000, id: 3, name: 'Ironman', type: 'Metal', feePerMinL: 130},
    { balance: 8000, id: 4, name: 'x-man', type: 'Mutant', feePerMinL: 140},
    { balance: 9000, id: 5, name: 'Antman', type: 'Insect', feePerMinL: 150}
];

// [ 'Superman', 'Batman' ...]

acc = heroes.reduce(function(acc,hero) {
    acc.push(hero.name)
    return acc
}, [])

console.log(acc)
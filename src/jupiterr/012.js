const superHeroes1 = [
    { name: 'Superman', price: 2000 },
    { name: 'Batman', price: 700 },
    { name: 'Spiderman', price: 1500 },
    { name: 'X-man', price: 1100 }
];

const superHeroes2 = [
    { name: 'Birdman', price: 11000 },
    { name: 'Antman', price: 7100 },
    { name: 'Aquaman', price: 15100 },
    { name: 'Wonderwoman', price: 11100 }
];

function hero911(arg) {
    return {
        heroes: arg,
        totalHeroesPrice: () => arg.reduce((total, hero) => total + hero.price, 0),
        eachHeroPrice: name => arg.find( hero => hero.name === name).price
        }
    }


const shopA = hero911(superHeroes1)
const shopB = hero911(superHeroes2)

console.log(shopA.totalHeroesPrice())
console.log(shopB.totalHeroesPrice())
console.log(shopA.eachHeroPrice('Spiderman'))
console.log(shopB.eachHeroPrice('Wonderwoman'))
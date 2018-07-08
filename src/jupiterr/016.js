const oldHeroes = ['Superman', 'Batman', 'Spiderman', 'Hulk']
const newHeroes = ['Ironman', 'Antman', 'Storm', 'X-man']

const totalHeroes = oldHeroes.concat(newHeroes)

console.log(totalHeroes)

const newTotal = [ 'Aquaman', 'Thunderman', ...oldHeroes, ...newHeroes]

console.log(newTotal)


function validate(arg) {
    if(totalHeroes.indexOf(arg) < 0 ) {
        return [arg, ...totalHeroes]
    }
}

const v = validate('Atom');

console.log(v)
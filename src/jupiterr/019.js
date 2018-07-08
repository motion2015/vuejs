let empolyees = [
    {
        name: 'Superman',
        type: 'hero',
        payments: ['1000/hr', '10000/day', '50000/week']
    },
    {
        name: 'Batman',
        type: 'hero',
        payments: ['2000/hr', '10000/day', '50000/week']
    },
    {
        name: 'Ironman',
        type: 'hero',
        payments: ['3000/hr', '10000/day', '50000/week']
    }
]

// var payments1 = empolyee[0].payments
// console.log(payments1)
const [ , ,{payments}] = empolyees
console.log(payments)



const superman = {
    title: 'Engineer',
    department: 'Engineering'
}

const batman = {
    title: 'Programmer',
    department: 'Coding'
}

function isEngineer(profile) {
    var title = profile.title;
    var department = profile.department
    return title === 'Engineer' && department === 'Engineering';
}

function isEngineer2({title, department}) {
    return title === 'Engineer' && department === 'Engineering';
}

console.log(isEngineer2(superman))

// const classesAsObject = 
// [{ subject: 'Geography', time: '2PM', teacher: 'Ironman' }]
// Use map helper

const classes = [
    ['Chemistry', '9AM', 'Superman'],
    ['Physics', '10:15AM', 'Batman'],
    ['Math', '11:30AM', 'Robin']
]

const classesAsObject = classes.map(([subject,time,teacher]) => {
    return {subject,time,teacher}
});

console.log(classesAsObject)

// Output [2, 4, 6, ...]
const numbers = [1, 2, 3];

function double([number, ...rest]) {
    // return number === undefined ? [] : [number *2, ...double(rest)]
    return number ? [number *2, ...double(rest)] : []
}

const double2 = ([number, ...rest]) => number ? [number *2, ...double(rest)] : []

console.log(double(numbers))
console.log(double2(numbers))

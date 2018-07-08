// Default Function Arguments

function httpRequest(url, method='GET') {
    console.log(method)
}

httpRequest('google.com')
httpRequest('google.com', 'POST')

function User(arg = generateCode()) {
    this.code = arg
}

function generateCode() {
    return parseInt(Math.random() * 10000)
}

const a= new User(1123)
console.log(a.code)
const b= new User()
console.log(b)


// function sum(a, b) {
//     if (a === undefined) {
//         a=0;
//     }
//     if (b === undefined) {
//         b=0;
//     }
//     return a+b
// }

function sum(a =0, b=0) {
    return a+b
}

// function cssTemplate(style) {
//     if (!style) {
//         style = {}
//     }
//     style.margin ='20px'
//     return style
// }

function cssTemplate(style = {}) {
    style.margin ='20px'
    return style
}
let loginForm = [
    { id: 41, hasSubmitted: true},
    { id: 62, hasSubmitted: false},
    { id: 84, hasSubmitted: true}
];

let loginFormSubmitted = loginForm.every(user =>user.hasSubmitted === true)

let httpRequests = [
    { url: '/photos', status: 'complete'},
    { url: '/albums', status: 'pending'},
    { url: '/users', status: 'failed'}
];


let inProgress = httpRequests.some(req => req.status === 'pending')

console.log(loginFormSubmitted)
console.log(inProgress)
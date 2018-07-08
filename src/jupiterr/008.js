let numbers = [ 1, 2, 3, 4, 5 ];
let sum = 0;

// for (var i = 0; i< numbers.length ; i++) {
//   sum += numbers[i];
// }

let sum2 = numbers.reduce(function(number){
 return  sum += number
})

console.log(sum2)
// 1. map(): Creates and reutrn new array by applying a function to each element of the original array.
// not change in original array

let arr = [1, 2, 3, 4];
let doubled = arr.map((el) => el * 2);
console.log("create a array doubled value of each element (map()): ", doubled);

// 2. filter(): Create and return a new array with elements that pass a specified test condition.

let evens = arr.filter((e) => e % 2 === 0);
console.log(evens);

// 3. reduce(): Reduces an array to a single value by applying a function to each element.
// by defualt  previousValue = 0, and currentValue = first element of array, sum initialize to 0.

let sum = arr.reduce((previousValue, currentvalue) => previousValue + currentvalue, 0);
console.log(sum);
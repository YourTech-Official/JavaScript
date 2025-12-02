// Array is a Data Structure that allows us to
// store multiple values in a single variable
// Arrays are used to store lists of elements like
// numbers, strings, objects, and even other arrays
// Arrays are zero-indexed, meaning the first element
// has an index of 0, then 1 so on.
// Arrays are mutable, meaning we can change their
// elements after creation.

// Creating an Array
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

// Accessing Elements
console.log(fruits[0]); // Output: "Apple"

// Array methods
//  1. push() : Adds elements to the end of array
let arr = [1, 2, 3];
arr.push(4);
console.log("Add element at end or array (push()): ", arr);
 
// 2. pop(): remove element from end and return that element.

console.log("Removed last element and return it (pop()): ", arr.pop(), arr);

// 3.shift(): Removes the first element and returns it.

console.log("Removed first element from array and return (shift()): ",arr.shift(), arr);

// 4. unshift(): Adds elements at beginning.
arr.unshift(1);
console.log("Add new element at beginning (unshift()): ", arr);

// 5. find(): Returns the first element that
// satisfies the provided testing function
let found = arr.find((elem) => elem > 1);
console.log("Find first element that satisfy condition (find()) : ", found);

// 6. includes():Determines whether an array contains
// a certain value. check presence of element in array.
console.log("Check 2 is present in array or not (includes()): ", arr.includes(2));

// 7. concat(): merges arrays and returns new array.
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let mergeArr = arr1.concat(arr2);
console.log("Merged Array (concat()): ", mergeArr);

// 9. join(): convert array elements into string,
// with an optional separator.

let joined = arr1.join(", ");
console.log("Without join : ", arr1);
console.log("Joined Method (join()): ", joined);

// 10. splice(): adds or removes elements from the array.splice(index, number of element to be delete, new elements)

console.log("Removed index 1 element replace with 3 : ", arr2.splice(1, 1, 3));
//remove 1 element(5) at index 1 and added 3
console.log("Removes element at index and add new element (splice()): ", arr2);

// [4, 3]

// 11.slice():Returns a shallow copy of a portion of an array. slice(starting index, last index) print excluding last index element.`

let ar = [1, 2, 3, 4, 5];

let sliced = ar.slice(1, 3);
console.log("Sliced array or piece of array (slice()): ", sliced);

// 12. sort() : sorts the elements of the array.
// sort alphabetically by default, but can be customized.

let array = [3, 45, 2, 1, 20, 30];

let sortedarr = array.sort((a, b) => a - b);
console.log("Sorted array (sort()): ", sortedarr);

// 13. findIndex(): Returns the index of the first element that satisfies a test.

let ind =    array.findIndex((el) => el > 10);
console.log("First element which is greater than 10 is (findIndex()): ", ind);

// 14. from(): Creates an array from an array like or iterable object. convert iterable obj or variable into array

let str = "hello";//this is iterable object

let createdArr = Array.from(str);
console.log("str Array Created (from()): ", createdArr);

// 15. isArray(): Check is the given value is an array or not

console.log("If it's true then return true (isArray()): ", Array.isArray(createdArr));


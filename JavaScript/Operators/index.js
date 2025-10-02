//OPERATORS IN JAVASCRIPT

//Arithmetic Operators
let a = 10;
let b = 5;

console.log("Arithmetic Operators:");
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + a * b);
console.log("Division: " + a / b);
console.log("Modulus: " + (a % b));
console.log("Exponentiation: " + a ** b); //square

//Assignment Operators
let c = 20;

console.log("\nAssignment Operators:");
console.log("Initial value of c: " + c);
c = c + 5; // c += 5;
console.log("After c += 5 : " + c);
c -= 3; // c = c - 3;
console.log("After c -= 3 : " + c);

// Comparison Operators
let x = 15;
let y = 10;

console.log("\nComparison Operators:");
console.log("x == y: " + (x == y));
console.log("x != y: " + (x != y));
console.log("x === y: " + (x === y));
console.log("x !== y: " + (x !== y));
console.log("x > y: " + (x > y));
console.log("x < y: " + (x < y));
console.log("x >= y: " + (x >= y));
console.log("x <= y: " + (x <= y));

// Fact or Magic in JavaScript == and ===

let e = 5;
let f = "5";

console.log("\nFact or Magic in JavaScript == and ===:");
console.log("e == f: " + (e == f)); //true because it compares only value
console.log("e === f: " + (e === f)); //false because it compares value and datatype

//NOTE :
// Always use === instead of == to avoid unexpected type coercion issues.
//BECAUSE - In == operator internally type conversion or type coercion(automatic type conversion) is done.
// but in === operator no type conversion is done.
//e == f why true , because here f is string '5' but during comparison JS engine
// convert it into number 5 and then compare it with e which is also 5. So, both are equal.

// Logical Operators
let isTrue = true;
let isFalse = false;

console.log("\nLogical Operators:");
console.log("isTrue && isFalse: " + (isTrue && isFalse));//both true then only true
console.log("isTrue || isFalse: " + (isTrue || isFalse));//if any one is true then true
console.log("!isTrue: " + !isTrue);//not operator toggle the value true to false and false to true

// Increment and Decrement Operators
let num = 10;   
console.log("\nIncrement and Decrement Operators:");
console.log("Initial value of num: " + num);
console.log("Post-increment: " + (num++)); //returns the value first and then increment
console.log("After Post-increment, num: " + num);
console.log("Pre-increment: " + (++num)); //increment first and then returns the value
console.log("After Pre-increment, num: " + num);
console.log("Post-decrement: " + (num--)); //returns the value first and then decrement
console.log("After Post-decrement, num: " + num);
console.log("Pre-decrement: " + (--num)); //decrement first and then returns the value
console.log("After Pre-decrement, num: " + num);    

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log("\nTernary Operator:");
console.log("Can you vote? " + canVote);

// Typeof Operator
console.log("\nTypeof Operator:");
console.log("Type of age: " + typeof age);

// Templated Literals (Template Strings)
let name = "John";
let greeting = `Hello, ${name}! Welcome to JavaScript operators.`;
console.log("\nTemplated Literals (Template Strings):");
// console.log(greeting);

//withoiut template literals
console.log('Hello, '+ ' "'+ name + '"'+'! Welcome to JavaScript operators.');
//with template literals
console.log(`Hello, "${name}"! Welcome to JavaScript operators.`);

// Function -

// function without parameter

function Hello() {
  console.log("Hello ! JavaScript");
}

Hello(); // function calling

// function with parameter

function sum(a, b) {
  // parameter
  console.log(a + b);
}

sum(2, 3); //argument

// fuction without parameter but with return type

function greet() {
  return "Hello";
}

console.log(greet()); //calling function
let greeting = greet();
console.log(greeting);

// fuction with parameter and return type

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// arrow fuction

const Greet = (a, b) => {
  return a + b;
};
console.log(Greet(4, 3));

// When the function body has only a single statement.
// you can omit the curly braces and the return keyword.
const Greeting = (a, b) => a + b;
console.log(Greeting(4, 3));

// variable scope

// global variable
let globalVar = 30; //we can access globally and locally

console.log("Try to access globally : ", globalVar);

let accessGlobalVar = () => {
  console.log("Try to access locally : ", globalVar);
};
accessGlobalVar();

// local variable

let accessLocalVar = () => {
    let localVar = 40; // can be access only within function where we declared this variable.
    console.log("Try to locally : ", localVar);
}
accessLocalVar();
// console.log(localVar); //this one throw error

if (true) {
    let blockVar = 50;
    console.log(blockVar);
}

// console.log(blockVar); // can't be access
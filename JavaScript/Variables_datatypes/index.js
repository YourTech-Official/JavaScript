
// variable

var x = 10;

console.log(x)
console.log(typeof(x))// to check datatype. x type is number

var y = 20.5
console.log(y + ' ' + typeof(y))// y type is also number

var name = 'Adil'
console.log(name + ' ' + typeof(name))// name type is string

// disadvantage of var
// 1. redeclaration is possible
var x = 20
console.log(x)

// let

let a = 30
console.log(a + ' ' + typeof(a))
a = 50 // update let variable, can not be re-declared
console.log(a)

//const
const pi = 3.14; //can't be update or re-declared
console.log(pi)
// Strings are sequence of characters used for representing text.

// methods
// length - Returns the number of characters in the string.
// toUpperCase - convert strings to uppercase
// toLowerCase - covert strings to lowercase
// includes() - checks if the string contains a specific substring.
// indexOf() - Returns the index of the first occurance of a substring.
//trim() - Removes whitespace from both ends of the string.
//subString(start, end) : Extracts a substring between two specific indices.
// slice(start, end) : Extracts a portion of the string , supporting negative indices.
// replace(old, new) : Replace specified substring with another substring.
// split(separator) : Splits the sting into an array based on a separator.
// charAt(index) : Returns the character at the specificed index.

// String initialisation
let name1 = 'Adi';
let name2 = "Adi";
let name3 = `Adi`;

// strings are inmutable in js 
let str = 'Hello word';

console.log(str.length);

console.log(str.toUpperCase());//return new strings(copy of str) with uppercase

// check original string remain unchanged
console.log("After uppercase method : \n", str);

console.log(str.toLowerCase());

console.log(str.includes('l'));//first occurance

console.log(str.indexOf('l'));//first occurance

console.log(str.trim());

console.log(str.substring(2, 4));//excluding last index

console.log(str.slice(2, 5));//excluding last index

console.log(str.replace("ll", "nn"));

console.log(str.split(" "));

console.log(str.charAt(4));


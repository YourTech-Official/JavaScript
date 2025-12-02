// Spread operator is used to  clone or copy object , array or variable

const phone1 = {
    name: 'Xiomi',
    price: 40000,
    ram: '8 gb',
    rom: '128 gb',

};

//why we use spread operator ,
//if there are similar properties in object or array or variable,
//then we can make a copy instead of rewriting same things repeatedly.
// here only brand name is different, everything is same, in this type
// of scenario we use spread operator.

// const phone2 = { //instead of this
//   name: "Vivo",
//   price: 40000,
//   ram: "8 gb",
//   rom: "128 gb",
// };

// const phone2 = { ...phone1, name: 'Vivo' };
// console.log(phone2);

//we can change multiple properties

const phone2 = { ...phone1, name: 'Vivo', price: 50000 };
console.log(phone2);


//Object  Destructuring
//it is used to access specific value or data from object

// WITHOUT DESTRUCTURING
console.log("Without Destructuring : ", phone1.name, phone1.price);

//WITH DESTRUCTURING
const { name, price } = phone1;
console.log("With Destructuring : ", name, price);


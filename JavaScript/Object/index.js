const person = {
  name: "Adi",
  age: 20,
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
  marks: [50, 60, 70, 80],
  address: {
    city: "Bbsr",
    dist: "Khordha",
    salary: 2000,
  },
 
};



// console.log("Name : ", person.name);
// console.log("Age : ", person.age);
// console.log("Greeting : ", person.greet());
// console.log("Marks1 : ", person.marks[0]);
// console.log("Marks2 : ", person.marks[1]);
// console.log("Marks3 : ", person.marks[2]);
// console.log("Marks4 : ", person.marks[3]);
// console.log("City : ", person.address.city);
// console.log("Dist : ", person.address.dist);

// Loop through object keys
// for (const key in person) {
//     const value = person[key];
//     if (typeof value === 'function') {
//         console.log(value());
//     } else if (Array.isArray(value)) {
//         // console.log(...value);
//         // for (const i of value) {
//         //     console.log(i);
//         // }
//         value.forEach((item) => {
//             console.log(item);
//         });
//     } else if (typeof value === 'object') {
//         // console.log(...Object.values(value));
//         // for (const items of Object.values(value)) {
//         //     console.log(items);
//         // }
//         Object.values(value).forEach((items) => {
//             console.log(items);
//        })
//     } else {
//         console.log(value);
//    }
// }

// Method 1: Object.keys() - print actual content
// console.log("Method 1: Object.keys()");
// for (const key of Object.keys(person)) {
//     const value = person[key];
//     if (typeof value === 'function') {
//         console.log(value());
//     } else if (Array.isArray(value)) {
//         console.log(...value);
//     } else if (typeof value === 'object') {
//         console.log(...Object.values(value));
//     } else {
//         console.log(value);
//     }
// }

// console.log("\nMethod 2: Object.entries()");
// for (const [key, value] of Object.entries(person)) {
//     if (typeof value === 'function') {
//         console.log(value());
//     } else if (Array.isArray(value)) {
//         console.log(...value);
//     } else if (typeof value === 'object') {
//         console.log(...Object.values(value));
//     } else {
//         console.log(value);
//     }
// }

// console.log("\nMethod 3: Object.values()");
// for (const value of Object.values(person)) {
//     if (typeof value === 'function') {
//         console.log(value());
//     } else if (Array.isArray(value)) {
//         console.log(...value);
//     } else if (typeof value === 'object') {
//         console.log(...Object.values(value));
//     } else {
//         console.log(value);
//     }
// }

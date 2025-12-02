// normal program (proceeduaral or functional)
// In JavaScript, a constructor is a special function used to create and initialize objects.
//  It defines the blueprint for objects of a particular type,
//  allowing for the creation of multiple instances with similar properties and methods

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving the ${this.year} ${this.make} ${this.model}.`);
  }
}

const myCar = new Car("Toyota", "Camry", 2023);
myCar.drive(); // Output: Driving the 2023 Toyota Camry.

// abstraction
const user1 = {
  fname: "Adi",
  sname: "s",
  age: 22,
};

function getAgeYear(age) {
  return new Date().getFullYear() - age;
}

// encapsulation
const user = {
  fname: "Adi",
  sname: "s",
  age: 22,
  getAgeYear: function (age) {
    return new Date().getFullYear() - user.age;
  },
};

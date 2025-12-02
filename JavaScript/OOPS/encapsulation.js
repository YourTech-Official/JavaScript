// Grouping data andd methods within an object reduces complexity.

// What does Encapsulation Mean?
// Encapsulation is a fundamental concept in object-oriented programming that
// refers to the process of grouping data together and behavior within a single entity called an object.
// The idea behind encapsulation is to hide the internal implementation details of an object and provide
//  a well-defined interface for accessing and manipulating that object’s state.

class employee {
  constructor(salary, overtime, rate) {
    this.salary = salary;
    this.overtime = overtime;
    this.rate = rate;
  }

  // Encapsulated method to calculate final salary
  getWage() {
    return this.salary + this.overtime * this.rate;
  }
}

// usage
const emp1 = new employee(50000, 10, 500);
console.log(emp1.getWage());

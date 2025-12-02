// using a function in multiple forms to keep the code concise and flexible
// poly means many and morphism means transforming one form into another.
//  Polymorphism means the same function with different signatures is called many times.
//  It allows methods to do different things based on the object it is acting upon.

class Shape {
  draw() {
    console.log("Drawing a shape...");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a Circle...");
  }
}
class Square extends Shape {
  draw() {
    console.log("Drawing a Square...");
  }
}

const shapes = [new Circle(), new Square()];
shapes.forEach((shape) => {
  shape.draw();
});

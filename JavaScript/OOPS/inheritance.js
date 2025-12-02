// Aquare or try to use or access parent properties in child. Reusing code to avoid writing redundant code.

class Vehicle{
    constructor(speed, fuel) {
        this.speed = speed;
        this.fuel = fuel;
    }
    showDetails() {
        console.log(`Speed : ${this.speed} km/h, fuel : ${this.fuel}`);
    }

}
class Car extends Vehicle{
    drive() {
        console.log("Car is Driving..");
    }
}
class Bike extends Vehicle{
    ride() {
        console.log("Bike is riding..");
    }
}

const myCar = new Car(120, "Petrol");
myCar.showDetails();
myCar.drive();
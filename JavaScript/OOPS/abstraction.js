// Hiding internal details while displaying only the essesntial information.
//  the concept of hiding complex implementation details and exposing only the essential functionalities to the user.
//  It focuses on what an object does rather than how it does it
class coffeeMachine {
  #heatwater() {
    console.log("Water heating...");
  }
  #brewCoffee() {
    console.log("Brewing coffee...");
  }

  makeCoffee() {
    this.#heatwater();
    this.#brewCoffee();
    console.log("Your coffee ready !");
  }
}

const machine = new coffeeMachine();
machine.makeCoffee();//output: Water heating... Brewing coffee... Your coffee ready !
// machine.#heatWater(); Error: Private method can't be accessed outside

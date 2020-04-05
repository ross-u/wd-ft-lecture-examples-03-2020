// ES6

// CREATING THE CLASS
class Car {
  constructor(brandParam, modelParam) {
    // this = {}
    this.brand = brandParam;
    this.model = modelParam;
    // this.printName = function () {
    //   console.log(this.model + ' ' + this.brand);
    // }
  }

  // After constructor block we can create methods that will be shared with all instances
    drive () {
      console.log(this.brand + ' drive around.');
    }

}

// Car.prototype  - this is an empty object, automatically created on every class
console.log('Car.prototype :', Car.prototype);

// new  - used to instantiate new objects with `class` or the constructor
const bmw = new Car('BMW', 'X5');
const lexus = new Car('Lexus', 'L300');

console.log('bmw :', bmw);
console.log('lexus :', lexus);

// Every object has a __proto__ property which points to its class prototype
console.log(Car.prototype === bmw.__proto__);




// EXTENDING THE CLASS
class HybridCar extends Car {
  constructor(brandParam, modelParam, engineParam) {
    super(brandParam, modelParam); // call Car `class` to create `brand` and `model`
    this.engine = engineParam;
  }

  description () {
    console.log('Description', this.model + " " + this.engine);
  }

  // static method is accessible only by the class itself, not by instances
  static getClassName () {
    console.log('class name: HybridCar');
  }

}


const hybridToyota = new HybridCar('Toyota', 'Prius', 'electric engine');

hybridToyota.description();
hybridToyota.drive();


// calling the static method
HybridCar.getClassName();









class FlyingHybridCar extends HybridCar {
}





// class Animal {
//   constructor(name, legs, isAmphibian, isFlying) {
//     this.name =name,
//     this.legs =legs,
//     this.isAmphibian =isAmphibian,
//     this.isFlying = isFlying
//   }

//   walk () {}

//   talk() {}
// }


// class Mammal extends Animal {
//   constructor(name, legs, isAmphibian, isFlying, species, livesOnLand, a1, a2, a3) {
//     super(name, legs, isAmphibian, isFlying);
//     this.species,
//     this.livesOnLand,
//     this.a1,
//     this.a2,
//     this.a3
//   }

//   walksStanding() {}
// }

















const cars = [
  ['BMW', 'x6'],
  ['toyota', 'hilux'],
  ['seat', 'ateca']
]

// const newCars = cars.map( (carArr)=>  new Car(carArr[0], carArr[1] ));
// console.log('newCars :', newCars);
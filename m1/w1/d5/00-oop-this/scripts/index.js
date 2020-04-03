const car1 = {
  brand: 'BMW',
  color: 'red',
  model: '530',
  averageSpeed: 90,
  year: 2018,
  mileage: 0
};

const car2 = {
  brand: 'toyota',
  color: 'black',
  model: 'Prius',
  averageSpeed: 60,
  year: 2015,
  mileage: 0
};

const car3 = {
  brand: 'Tesla',
  color: 'red',
  model: '3',
  averageSpeed: 50,
  year: 2018,
  mileage: 0,
  printName: function () {
    console.log('Name : ' + this.brand + this.model);
  },
  updateMilage: function (hours) {
    this.mileage = hours * this.averageSpeed;
  }
};

function drive (hours, averageSpeed) {
  return hours * averageSpeed;
}

car1.mileage = drive(100, car1.averageSpeed);
car2.mileage = drive(100, car2.averageSpeed);
car3.mileage = drive(100, car3.averageSpeed);

car3.updateMilage(70)

console.log('car3', car3);


car3.printName();


// `this` - special value that exists only inside of the functions
// 

// 1. In a free function declaration and expression, value of `this` is Global object
function whatIsThis() {
  console.log(this);
}

whatIsThis();


// 2. In a function which is a method. 
// When calling a method the value of `this` is whatever is on the left of the dot

const person = {
  name: 'John',
  age: 21,
  country: 'Scotland',
  myMethod: function () {
    console.log('myMethod', this);
  }
}

person.myMethod();


const cat = {
  name: 'Fluffy',
  chars: {
    color: 'Black',
    temper: 'nice cat',
    getCharacter: function () {
      console.log(`This cat is ${this.temper}, and it is ${this.color}.`);
    }
  }
}

cat.chars.getCharacter();


// 3. Exception - `this` in arrow functions
// Arrow funcitons don't come with `this`
// Arrow function takes the value of `this` from the surrounding scope in which it was created


const myObject = {
  name: 'MY OBJECT',
  myMethodArrow: () => {
    console.log('myMethodArrow() -> this ',this);
  },
  myMethodRegular: function () {
    console.log('myMethodRegular() -> this ',this);
  }
}

myObject.myMethodRegular(); // (regular method) this is coming from the left of the dot

myObject.myMethodArrow(); // (arrow method) this is coming from the surrounding scope


const toy = {
  name: 'car',
  price: 10,
  regularMethod: function () {
    console.log('regularMethod', this);

    const arrowInner = () => {        // in scope of `regularMethod`
      console.log('arrowInner', this);
    }

    arrowInner(); // this ?
  }
}

// toy.regularMethod();


// 4. bind(),  apply(), call()
// These methods can be used to set the custom value of `this` inside of a function

const myObj = {
  name: 'My object',
  printThis: function () {
    console.log(this);
  }
}


const randomObj = {
  price: 555,
  name: 'I AM RANDOM OBJ'
}


// call() is used to invoke a function and give it a custom value of this
myObj.printThis.call(randomObj);

// bind() creates/returns a new function with a totaly new value of `this`
const newObj = { name: 'I AM NEW OBJ'};
const newPrint  = myObj.printThis.bind(newObj);

newPrint();


// Advanced: customizing the `arguments` object values, that are present by default
// Number.prototype.customToFixed = Number.prototype.toFixed.bind(null, 5);
// (5).customToFixed()

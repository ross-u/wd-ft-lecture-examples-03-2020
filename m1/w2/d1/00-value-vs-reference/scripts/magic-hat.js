function magicHat(obj) {
  // var obj = <456ooo>
  obj.age = 10;  //  <456ooo>.age

  obj = { name: 'John', age: 20 }; //  <789jjj>
  return obj;
}

const rabbit1 = { name: 'Rapha', age: 30 };
  
const rabbit2 = magicHat(rabbit1);
  
console.log('rabbit1 ->', rabbit1);
console.log('rabbit2 ->', rabbit2);


// Functions create internal variables for each argument/parameter

// Objects are passed/assigned by reference
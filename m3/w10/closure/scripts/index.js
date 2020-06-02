// Closure is created when a function returns a function
// currying

// function outer() {

//   const secret = "shhhhhhhh";
//   const favNum = 14;

//   return function inner() {

//     console.log('Inner: ' + secret + favNum);
//   }

// }


// const innerFunc = outer();
// innerFunc();





// const createMultiplier = (multiplyBy) => {
//   // var multiplyBy = 100

//   const inner = (number) => {
//     // debugger;
//     console.log(multiplyBy * number);
//     return multiplyBy * number
//   }

//   return inner;

// }

// const multiplyBy100 = createMultiplier(100);


// multiplyBy100(3);
// multiplyBy100(7.5);


// CURRYING

// function sum(a) {
//   // var a = 10
//   return function (b) {
//     // var b = 99
//     return function (c) {
//       return a + b + c;
//     }
//   }
// }


// const result = sum(10)(99)(1000);

// console.log('result', result)


function createSecret(passwordString, mySecret) {
  const password = passwordString;
  const secret = mySecret;


  return function inner(passwordInput) {
    if (passwordInput === password) {
      console.log(`The secret is: ${secret}`);
    }
    else {
      console.log('Wrong!');
    }
  }
}


const getSecret = createSecret('Bananarama', 'I love chocolate ice cream');


getSecret("Bananarama")

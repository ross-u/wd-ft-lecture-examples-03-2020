const pr = new Promise(function(resolve, reject) {})

// console.log(pr);


// PROMISE SYNTAX
// Parameters `resolve` and `reject` are functions provided by Promise interface
const promise1 = new Promise( function(resolve, reject) {

  // `resolve` is called if operation is successful/fullfiled
  resolve();

  // `reject` is called if the operation was unsuccessful/rejected
  reject();

});


promise1
  .then(function() {})
  .catch(function() {})

//  promise1.then().catch()


const promiseToExerciseToday = new Promise(function (resolve, reject) {

  // Exercise done ?
  const userDidExercise = true;

  if (userDidExercise) {
    resolve('User Exercised Today!!!');
  }
  else {
    reject('Did not Exercise :( ');
  }
});


console.log('promiseToExerciseToday :', promiseToExerciseToday);


// OPENING A FULFILLED OR REJECTED PROMISE
promiseToExerciseToday
 .then(function(valueFromResolve) {
  //  console.log('valueFromResolve :', valueFromResolve);
 })
 .catch(function(valueFromReject) {
  //  console.log('valueFromReject :', valueFromReject);
 });

 /* When the promise is resolved (code inside is done executing ):
// to read the values coming from `resolve()` we use `.then()`
// to read the value coming from `reject()` we use `.catch()`
// We can chain them as:
      promise.then().catch() 
*/



const getDataFromServer = new Promise(function (resolve, reject) {

  // Successful Request
  const data = {
    item: 'MacBook Pro 16',
    price: 2600,
    year: 2020,
    img: "https://www.macnificos.com/sites/files/styles/product_page/public/images/product/macbook-16-1_1.jpg" 
  }

  // Rejected Request
  const error = new Error('Unable to get the Data!!!!');

  // Request throws an Error
  // throw new Error('ERROR WAS THROWN INSIDE')

  if (data) {
//if (false) {
    resolve(data)
  }
  else if (error) {
    reject(error)
  }
});


getDataFromServer
  .then(function(dataFromResolve) {
    // console.log('dataFromResolve :', dataFromResolve);

    const div = document.createElement('div');  
    div.innerHTML = `
      <div class="container">
        <article class="product">
          <img src="${dataFromResolve.img}" alt="">
          <h3>${dataFromResolve.item}</h3>
          <h3>${dataFromResolve.price}</h3>
          <h4>Year: ${dataFromResolve.year}</h4>
        </article>
      </div>
    `;

    document.body.appendChild(div);

  })
  .catch(function(errorFromReject) {
    // console.log('errorFromReject :', errorFromReject);

    const div = document.createElement('div');  
    div.innerHTML = `
      <div class="container error">
        <h1>ERROR</h1>
        <h2>${errorFromReject}</h2>
        <img src="https://vignette.wikia.nocookie.net/battlefordreamisland/images/f/f1/Roboty_book.png/revision/latest?cb=20190908174044" alt="">
      </div>
    `;

    document.body.appendChild(div);
  });




  // fetch() returns a pending Promise
// fetch('https://api.spacexdata.com/v3/launches').then().catch();

// fetch('https://api.spacexdata.com/v3/launches')
//   .then()
//   .catch();


const apiRequestPromise = fetch('https://api.spacexdata.com/v3/launches');

// Promise that rejects due to the wrong URL string
// const apiRequestPromise = fetch('xxhttps://api.spacexdata.com/v3/launches');

apiRequestPromise
  .then(function(response) {
    // console.log('response :', response);

    // convert `response.body` to readable json object
    const parseBodyPr = response.json();// it returns a Promise

    return parseBodyPr; // forward to the next `then` block
  })
  .then(function(parsedBody) {
    console.log('parsedBody :', parsedBody);


    parsedBody.forEach( (launchObj) => {

      if (launchObj.links.mission_patch) {

        const newImage = document.createElement('img');
        newImage.setAttribute('src', launchObj.links.mission_patch);
        newImage.setAttribute( 'width', 200);
        
        document.body.appendChild(newImage)
      }

    })
  })
  .catch(function(error) {
    const div = document.createElement('div');  
    div.innerHTML = `
      <div class="container error">
        <h1>ERROR</h1>
        <h2>${error}</h2>
        <img src="https://vignette.wikia.nocookie.net/battlefordreamisland/images/f/f1/Roboty_book.png/revision/latest?cb=20190908174044" alt="">
      </div>
    `;

    document.body.appendChild(div);
  });






// TRY IT ON YOUR OWN
// https://restcountries.eu

// GET request to the restcountries.eu API
// fetch("https://restcountries.eu/rest/v2/all")
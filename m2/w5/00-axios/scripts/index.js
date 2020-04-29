const countriesDiv = document.querySelector("#country-list")


// Use fetch to make a GET request to the API
fetch("https://restcountries.eu/rest/v2/all")
  .then( (response) => {
    console.log( 'fetch response ->',response.body);
    
    const pr = response.json();
    return pr;
  })
  .then((countriesArr) => {
    countriesArr.forEach((countryObj) => {
      const newDiv = document.createElement('div');

      newDiv.innerHTML = `
      <h1>${countryObj.name}</h1>
      <h3>${countryObj.capital}</h3>
      `

      document.body.appendChild(newDiv)
    })
  })
  .catch( (err) => console.log(err));



// Make a get request to an API using axios
axios.get("https://restcountries.eu/rest/v2/all")
  .then( (response) => console.log("axios response.data ->", response.data))
  .catch( (err) => console.log(err));




// Axios enables us to create a base request that can be used with different methods and endpoints:
const countriesAPI = axios.create( { baseURL: "https://restcountries.eu/rest/v2" }  );


// Using request object with the predefined baseURL
countriesAPI.get('/all');
countriesAPI.get('/name/spain');


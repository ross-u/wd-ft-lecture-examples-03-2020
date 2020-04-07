'use strict'

// getElementById

const firstDiv = document.getElementById('first');
const secondDiv = document.getElementById('second');

// console.log('firstDiv', firstDiv);
// console.log('secondDiv', secondDiv);


// innerHTML - is used to add content to an element 
// (triggers parsing of the string to HTML)
firstDiv.innerHTML = `
<h2>First div</h2>
<p>Hello this is the first div</p>
`;
secondDiv.innerHTML = "I'm the second div";


// style
firstDiv.style.backgroundColor = 'red';
firstDiv.style.border = "4px solid yellow";
firstDiv.style.fontSize = "20px";
firstDiv.style.padding = "30px";

// getElementsByClassName()
// it returns an HTMLCollection - can't use array methods directly

const theHTMLCollection = document.getElementsByClassName('third');

console.log('theHTMLCollection', theHTMLCollection);

const arrayOfElements = [...theHTMLCollection];

arrayOfElements.forEach((el) => {
  // console.log(el);
})


// getElementsByTagName()
// it returns an HTMLCollection - can't use array methods directly

const divsHTMLCollection = document.getElementsByTagName('div');

// Copy the HTMLCollection to an array to enable use of array methods
const divsArray = [...divsHTMLCollection];

divsArray.forEach((el) => {
  el.style.width = "300px";
  el.style.height = "50px";
  el.style.border = "1px solid black"
});


// querySelector() - use CSS syntax to target elements
// It returns the first found element in the DOM that matches the query
// returns an object (element)
const firstClassDiv = document.querySelector(".third");
const firstFoundDiv = document.querySelector("div");

// console.log('firstClassDiv :', firstClassDiv);
// console.log('firstFoundDiv :', firstFoundDiv);


// querySelectorAll()
// returns NodeList - we can use the array methods
// const mixed = document.querySelectorAll(".third, h1");
const thirdDivs = document.querySelectorAll(".third");


// console.log('thirdDivs :', thirdDivs);

// thirdDivs.forEach((ele)=> {
//   console.log(ele);
// })



// .className
const third1 = document.querySelector('.third');
console.log(third1.className);

third1.className += ' active';


// .id 
const activeDiv = document.querySelector('.active');

activeDiv.id = "intro";
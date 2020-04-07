'use strict'

const h1 = document.querySelector('h1');

const googleLink = document.getElementById('google-link');

// GET THE ATTRIBUTE VALUE
const headlineId = h1.getAttribute("id");
const headlineClass = h1.getAttribute("class");
const googleLinkUrl = googleLink.getAttribute('href');

// console.log('headlineId :', headlineId);
// console.log('headlineClass :', headlineClass);
// console.log('googleLinkUrl :', googleLinkUrl);


// SET THE ATTRIBUTE VALUE
const contentDiv = document.querySelector('#content');

contentDiv.setAttribute('id', 'title-div');


const listElement = document.querySelector("#item-list");
listElement.removeAttribute("id");


// CREATE NEW ELEMENT - createElement()
const h2Tag = document.createElement('h2');

// Add content to the element using innerHTML
h2Tag.innerHTML = "White House signals support for a new international Moon Treaty";


const body = document.querySelector('body');
body.appendChild(h2Tag)

// console.log(body);



const articleBrief = document.createElement('h3');
const articleContent = document.createElement('p');

const textContent1 = document.createTextNode('White House signals support for a new international Moon Treaty');
const textContent2 = document.createTextNode('The international community has struggled for decades to formalize rules regarding the collection and use of resources in space and on the Moon. While the U.S. and all spacefaring countries declined to endorse the most famous attempt, the 1979 “Moon Treaty,” the new Moon race has spurred the White House to announce it is open to a new international agreement on the topic. In an executive order issued today, the administration signaled that it will be the policy going forward to encourage international support for the public and private recovery and use of resources in outer space.');

articleBrief.appendChild(textContent1);
articleContent.appendChild(textContent2);

body.appendChild(articleBrief);
body.appendChild(articleContent);


// EXERCISE EXAMPLE
// Create new image element
const articleImage = document.createElement('img');

// setAttribute()  src
articleImage.setAttribute('src', 'https://techcrunch.com/wp-content/uploads/2020/04/artemis-moon-lunar-astronauts.jpg?w=730&crop=1');

// Add styling to an image
articleContent.style.width = '80%';
articleImage.style.display = "block";
articleImage.style.margin = "0 auto";

// Append the new element before articleBrief element
body.insertBefore(articleImage, articleBrief);



// REMOVING THE ELEMENTS OR THE CONTENT
// articleBrief.style.display = "none";
// articleBrief.innerHTML = "";

// To remove an element/node
// articleImage.remove();

// To remove an element that is a direct child
// body.removeChild(articleContent);



// EVENT LISTENERS

const button = document.querySelector('#add-item-button');

// Syntax example 1
// button.onclick = function () {
//   console.log("The button was clicked");
// }

// button.addEventListener('click', function () {
//   console.log("The button was clicked");
// })

/* 
function backgroundRed () {
  this.style.backgroundColor = 'red';
  this.style.fontSize = "40px";
}

function backgroundWhite () {
  this.style.backgroundColor = 'white';
  this.style.fontSize = "18px";
}

function removeMouseEvents () {
  this.style.backgroundColor = 'aquamarine';

  button.removeEventListener('mouseover', backgroundRed);
  button.removeEventListener('mouseout', backgroundWhite);
  button.removeEventListener('click', removeMouseEvents);
}

button.addEventListener('mouseover', backgroundRed);

button.addEventListener('mouseout', backgroundWhite);

button.addEventListener('click', removeMouseEvents); 
*/



const dropdownSection = document.getElementById("dropdown-section");
const toggleButton = document.getElementById("hide-div");

// classList  - used to work with all the class names of the element
// add
// remove
// toggle

dropdownSection.classList.remove('test');

dropdownSection.classList.add('open');


toggleButton.addEventListener('click', function() {
  dropdownSection.classList.toggle('close');

  if (toggleButton.innerHTML === "Hide") {
    toggleButton.innerHTML = "Show";
  }
  else {
    toggleButton.innerHTML = "Hide";
  }
})


const addItemButton = document.querySelector('#add-item-button');
const itemsList = document.querySelector('ul');

addItemButton.addEventListener('click', function() {

  if (itemsList.children.length === 3) {
    
    const message = document.createElement('h4');
    message.innerHTML = 'Max items allowed is: 3'

    itemsList.appendChild(message);
    return;
  }
  else if (itemsList.children.length > 3) {
    return
  }
  else {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = `Item number ${itemsList.children.length + 1}`
    
    itemsList.appendChild(newListItem);
  }
});


// WORKING WITH INPUTS

const input = document.querySelector('#username');
const sendButton = document.querySelector('#send-btn');
const newList = document.querySelector('#new-list');


sendButton.addEventListener('click', function (event) {
  // event object is always provided to the event function
  // it is an object representing the event that occured
  // console.log(event);

  // prevent default behavior of the form - reload
  event.preventDefault(); 
  console.log(input.value);

  // 1. Create new element
  const newListItem = document.createElement('li');
  // 2. Add content to the new element
  newListItem.innerHTML = input.value;
  // 3. Append item to the parent element
  newList.appendChild(newListItem);

  // Clear the input
  input.value = '';
  
})

// getElementbyId - returns only one element object/node
const mainH1 = document.getElementById('main-title');

// getElementsByTagName - HTMLCollection
const headlines = document.getElementsByTagName('h1');

// getElementsByClassName - HTMLCollection
const headlineClassEls = document.getElementsByClassName('headline');

console.log('headlines :', headlines);
console.log('headlineClassEls :', headlineClassEls);


// querySelector() - returns the first matching element

// const body = document.querySelector('body');
const section = document.querySelector('section');

// Start travering the DOM (searching through) from element
// on the lower level in the DOM tree
const firstH1 = section.querySelector('h1');

console.log('firstH1 :', firstH1);

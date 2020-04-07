const h1 = document.querySelector('h1');

const googleLink = document.getElementById('google-link');

// GET THE ATTRIBUTE VALUE
const headlineId = h1.getAttribute("id");
const headlineClass = h1.getAttribute("class");
const googleLinkUrl = googleLink.getAttribute('href');

console.log('headlineId :', headlineId);
console.log('headlineClass :', headlineClass);
console.log('googleLinkUrl :', googleLinkUrl);


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
const articleImage = document.createElement('img');

// setAttribute

articleImage.setAttribute('src', 'https://techcrunch.com/wp-content/uploads/2020/04/artemis-moon-lunar-astronauts.jpg?w=730&crop=1');

articleContent.style.width = '80%';
articleImage.style.display = "block";
articleImage.style.margin = "0 auto";

// body.appendChild(articleImage)

body.insertBefore(articleImage, articleBrief);


// REMOVING THE ELEMENTS OR THE CONTENT
// articleBrief.style.display = "none";
// articleBrief.innerHTML = "";

// To remove an element/node
articleImage.remove();

// To remove an element
body.removeChild(articleContent);

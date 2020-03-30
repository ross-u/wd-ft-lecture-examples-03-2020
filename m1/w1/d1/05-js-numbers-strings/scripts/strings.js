var string1 = "string one";
var string2 = 'string two';
var string3 = `string three`;  //  String interploation


var username = 'Sarah';

var greeting = `Hello ${username}`;
console.log(greeting);



var stringValid = `
1. banana 🍌
2. apple 🍎
3. orange 🍊
4. cherry 🍒
`;



var favShow = "My favorite show is \"Mr.Robot\" ";
var favShow = 'My favorite show is "Mr.Robot" hello there';


console.log( favShow.length )


// String concatenation +  +=

var container = '';

container += 'Hello ';
container += 'welcome to IH!';
console.log(container);


var number = 123;
number += 'abcde';
console.log(number);



var myString = 'Bananarama!';

console.log(myString.length);


console.log(myString[0]);
console.log(myString[3]);
console.log(myString[-2]);

console.log(  myString[myString.length - 1]   )



// string.indexOf(substr, [startAt])

var message = "Don't be sad, be happy!";

console.log(message.indexOf("happy"));
console.log(message.indexOf("candy")); // -1


// .repeat()

console.log( "$".repeat(10) );



// .substring()
var substring = message.substring(0, 3);

console.log(substring);


// .slice()
var slicedStr = message.slice(0, 7);
console.log(slicedStr);


var slicedEnd = message.slice(-6);
console.log(slicedEnd);

console.log(message);


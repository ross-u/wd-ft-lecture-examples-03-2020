const chalk = require("chalk");
const greet = require("./greetings");
// const greet = require("./greetings.js");

const sayHelloFunc = require("./util/say-hello");


console.log(chalk.blue(greet.en));
console.log(chalk.blue(greet.secret));

sayHelloFunc()

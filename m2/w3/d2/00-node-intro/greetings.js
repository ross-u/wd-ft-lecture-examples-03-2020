var secret = '123';

const greetingsObj = {
  en: 'Hello Ironhackers',
  es: 'Hola Ironhackers',
  de: 'Hallo Ironhackers',
  fr: 'Salut Ironhackers',
  it: 'Ciao Ironhackers',
  secret: secret
}

/* To make a file loadable as a module that can be required
   we have to export the value/values via module.exports
*/ 
module.exports = greetingsObj;
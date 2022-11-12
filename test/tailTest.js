const assertEqual = require('../assertEqual');
const tail = require('../tail');


const words = ["Hello", "Hi", "Hola"];
const result = tail(words);
assertEqual(result.length, 2);
assertEqual(result[0], "Hi");
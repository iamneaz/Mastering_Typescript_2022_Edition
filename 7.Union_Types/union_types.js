"use strict";
exports.__esModule = true;
// a function with union type parameter
var guessAge = function (age) {
    return "Your age is " + age;
};
console.log(guessAge(30));
console.log(guessAge("Thirty"));
var coordinates = { x: 2, y: 3 };

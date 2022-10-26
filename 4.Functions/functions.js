function square(num) {
    return num * num;
}
// function greet(person: string) {
//     return `hi there, ${person}`;
// }
var doSomething = function (person, age, isFunny) {
};
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "hi there, ".concat(person);
}
square(3);
greet("Monkey D. Luffy");
greet();
doSomething("ChickenFace", 76, true);
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
/*
**  Anonymous Functions
*/
var colors = ["red", "green", "blue"];
colors.map(function (color) {
    return color.toUpperCase();
});
/*
**  Void Return Type
*/
function printTwice(message) {
    console.log(message);
    console.log(message);
}
/*
**  Never Type
*/
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("GAME LOOP RUNNING");
    }
}

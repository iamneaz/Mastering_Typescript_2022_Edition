var dog = {
    name: "Elton",
    breed: "Australian Shpherd",
    age: 0.5
};
// A function with an object type parameter
var printName = function (name) {
    return "Name: ".concat(name.first, " ").concat(name.last);
};
console.log(printName({ first: "Will", last: "Ferrell" }));
var coordinate = { x: 30, y: 60 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
console.log(randomCoordinate());

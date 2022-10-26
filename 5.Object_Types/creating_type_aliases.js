// Use the type alias in the annotation
var sayHappyBirthday = function (person) {
    return "Hey ".concat(person.name, ", congras on turning ").concat(person.age);
};
console.log(sayHappyBirthday({
    name: "Jerry",
    age: 42
}));

"use strict";
/*
 *   Type of Guard
 */
function tripple(value) {
    if (typeof value === "number")
        return value * 3;
    return value.repeat(3);
}
/*
 *   Truthiness Guards
 */
const element = document.getElementById("idk");
if (element) {
    element;
}
else {
    element;
}
const printLetters = (word) => {
    // for(let char of word){
    // } ===> Would get error showing word possibly undefiend.
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("You did not pass a word");
    }
};
/*
 *   Equality Narrowing
 */
//------ comparing types to each other before doing certain operations with values
//------ By checking two values against one another, we can be sure there both the sam before working with them in a type-specific way
function someDemo(x, y) {
    if (x === y) {
    }
}
function getRuntime(media) {
    if ("numberOfEpisode" in media) {
        return media.numberOfEpisode * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({ title: "BakaMovie", duration: 180 }));
/*
 *   Instance of Narrowing
 */
// works for class , array etc which javascript understands
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        console.log(entity.username);
    }
    else {
        console.log(entity.name);
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow";
    }
    else {
        animal;
        return "bark";
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            return "Oink!";
        case "cow":
            return "Mooo!";
        case "rooster":
            return "Cockadoodledoo!";
        case "sheep":
            return "BAAA !";
        default:
            // We should never make it here, if we handled all cases correctly
            // const shouldNeverGetHere: never = animal;
            // return shouldNeverGetHere
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));

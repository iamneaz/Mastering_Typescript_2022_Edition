"use strict";
// function doThing(thing: number | string):number | string{
// }
/*
 **  Built in GENERIC
 */
const nums = [];
const inputElement = document.querySelector("#username");
console.dir(inputElement);
//inputElement.value = "Hacked";
const button = document.querySelector(".btn");
/*
 **  Writing our first GENERIC
 */
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
/*
function identity<Type>(item: Type): Type {
  return item;
}
*/
function identity(item) {
    return item;
}
identity(7);
identity({ name: "Tom", breed: "houseCat" });
/*
 **  Writing Another Generic Function
 */
function getRandomElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
console.log(getRandomElement([1, 2, 3]));
/*
 **  Inferred Generic Type Parameters
 */
getRandomElement(["a", "b", "c"]);
/*
 **  Generics With Multiple Types
 */
// function merge<T, U>(object1: T, object2: U): T & U {
//   return {
//     ...object1,
//     ...object2,
//   };
// }
// const comboObj = merge({ name: "Colt" }, { pets: ["blue", "elton"] });
/*
 **  Adding Type Constraints
 */
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "Colt" }, { num: 9 });
function printDoubleLength(thing) {
    return thing.length * 2;
}
/*
 *  Double Type Parameters
 */
// Normal Generic Function
// function makeEmptyArray<T>(): T[] {
//   return [];
// }
//  Using Default Value for Type
function makeEmptyArray() {
    return [];
}
//const strings = makeEmptyArray(); => We get unknown Type
const strings = makeEmptyArray(); // shows default Type value
const bools = makeEmptyArray();
class PlayList {
    constructor() {
        this.queue = [];
    }
    add(element) {
        this.queue.push(element);
    }
}
const songs = new PlayList();
const videos = new PlayList();

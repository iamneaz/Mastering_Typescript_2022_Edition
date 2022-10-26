// A type Alias
type Person = {
    name: string;
    age: number;
};

// Use the type alias in the annotation
const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}, congras on turning ${person.age}`;
}

console.log(
sayHappyBirthday({
    name: "Jerry",
    age: 42
}));

///////////////////////////////////////////////////////////////////////////////////////////

function doublePoint(point:{x: number,y: number}):{x: number,y: number}{
    return {x: point.x *2, y: point.y *2 };
}

type Point = {
    x: number;
    y: number;
};

let coOrdinate:Point = {x: 34, y:2};

function randomCoordinate(): Point{
    return {x: Math.random(), y: Math.random()}
}

/*
** Premetive Type __ type alias
*/

type myNum = number;
let age: myNum = 230;
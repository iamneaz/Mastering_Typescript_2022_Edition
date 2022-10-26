const dog = {
    name: "Elton",
    breed: "Australian Shpherd",
    age: 0.5
}

// A function with an object type parameter
const printName = (name: { first: string; last: string }): string => {
    return `Name: ${name.first} ${name.last}`;
}

console.log(
    printName({ first: "Will", last: "Ferrell" })
);

let coordinate: { x: number, y: number } = { x: 30, y: 60 };

function randomCoordinate(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() }
}

console.log(randomCoordinate());

//printName({ first: "Will", last: "Ferrell",age:40 }) // Will give error
const singer ={first:"Marshall",last: "Mathers",age:40}
printName(singer) // Will not give error and the extra property "age" would not be used
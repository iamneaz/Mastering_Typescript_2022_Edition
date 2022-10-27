export {};
/*
// An Interface
interface Person {
  name: string;
  age: number;
}

//Use the type alias in the annotation
const sayHappyBirthday = (person: Person) => {
  return `Hey ${person.name}, congrats on turning ${person.age}`;
};

console.log(sayHappyBirthday({ name: "Jerry", age: 42 }));
*/
/*
 **  Readonly and Optional Interface Properties
 */
/*
interface Person {
  readonly id: number; // readonly property
  first: string;
  last: string;
  nickname?: string; // Optional by adding ?
}

const thomas: Person = {
  id: 121,
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
};
*/
/*
 ** Interface Methods
 */
/*

interface Person {
  readonly id: number; // readonly property
  first: string;
  last: string;
  nickname?: string; // Optional by adding ?
  sayHi: () => string; // we are not writing the function here.
  // () => represents a method
  // we are only giving the return type of the function [here string is the return type]
}

const thomas: Person = {
  id: 121,
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  sayHi: () => {
    return `Hello`;
  },
};

*/

/*
 **  Interface Method Parameters
 */
/*
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    return newPrice;
  },
};

console.log(shoes.applyDiscount(0.4));
*/

/*
 **  Reopening Interfaces
 */
/*
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "Woof Woof";
  },
};
*/

/*
 **  Extending Interfaces
 */
/*

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

interface ServiceDog extends Dog {
  job: "Drug Sniffer" | "Bomb" | "Guide Dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark";
  },
  job: "Bomb",
};
*/

/*
 **  Interface Multiple Inheritance
 */

interface Person {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 123,
  email: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "Python"],
};

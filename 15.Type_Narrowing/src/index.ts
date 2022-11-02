/*
 *   Type of Guard
 */

function tripple(value: number | string) {
  if (typeof value === "number") return value * 3;
  return value.repeat(3);
}

/*
 *   Truthiness Guards
 */

const element = document.getElementById("idk");
if (element) {
  element;
} else {
  element;
}

const printLetters = (word?: string) => {
  // for(let char of word){

  // } ===> Would get error showing word possibly undefiend.
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("You did not pass a word");
  }
};

/*
 *   Equality Narrowing
 */
//------ comparing types to each other before doing certain operations with values
//------ By checking two values against one another, we can be sure there both the sam before working with them in a type-specific way

function someDemo(x: string | number, y: string | number): void {
  if (x === y) {
  }
}

/*
 *   Narrowing with the In Operator
 */
interface Movie {
  title: string;
  duration: number;
}

interface TVshow {
  title: string;
  numberOfEpisode: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVshow) {
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

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    console.log(entity.username);
  } else {
    console.log(entity.name);
  }
}

/*
 *   Working with Type Predicates
 */

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal;
    return "Meow";
  } else {
    animal;
    return "bark";
  }
}

/*
 * Discriminated Unions
 */
/*
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Mooo!";
    case "rooster":
      return "Cockadoodledoo!";
  }
}
const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));
*/
/*
 * Exhaustiveness Checks with Never
 */

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
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
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));

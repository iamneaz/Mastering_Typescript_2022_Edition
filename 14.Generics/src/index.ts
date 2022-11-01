// function doThing(thing: number | string):number | string{

// }
/*
 **  Built in GENERIC
 */
const nums: Array<number> = [];

const inputElement = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputElement);
//inputElement.value = "Hacked";

const button = document.querySelector<HTMLButtonElement>(".btn")!;

/*
 **  Writing our first GENERIC
 */
function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any):any{
//     return item;
//}
interface Cat {
  name: string;
  breed: string;
}
/*
function identity<Type>(item: Type): Type {
  return item;
}
*/
function identity<T>(item: T): T {
  return item;
}

identity<number>(7);
identity<Cat>({ name: "Tom", breed: "houseCat" });

/*
 **  Writing Another Generic Function
 */

function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

console.log(getRandomElement<number>([1, 2, 3]));

/*
 **  Inferred Generic Type Parameters
 */

getRandomElement<string>(["a", "b", "c"]);

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

function merge<T extends object, U extends object>(
  object1: T,
  object2: U
): T & U {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ name: "Colt" }, { num: 9 });

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
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
function makeEmptyArray<T = string>(): T[] {
  return [];
}

//const strings = makeEmptyArray(); => We get unknown Type

const strings = makeEmptyArray(); // shows default Type value
const bools = makeEmptyArray<boolean>();

/*
 *   Writing Generic Classes
 */

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class PlayList<T> {
  public queue: T[] = [];
  add(element: T) {
    this.queue.push(element);
  }
}

const songs = new PlayList<Song>();

const videos = new PlayList<Video>();

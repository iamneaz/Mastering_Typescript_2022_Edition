// a function with union type parameter
const guessAge = (age: number | string) => {
  return "Your age is " + age;
};

console.log(guessAge(30));
console.log(guessAge("Thirty"));

type Point = {
  x: number;
  y: number;
};

type Location = {
  latitude: number;
  longitude: number;
};
let coordinates: Point | Location = { x: 2, y: 3 };
coordinates = { latitude: 56.33, longitude: 33.33 };
export {};

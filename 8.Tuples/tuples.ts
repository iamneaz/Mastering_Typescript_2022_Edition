export {};

// Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays

//  Creating a Tuple with its type definition
let myTuple: [number, string];

myTuple = [123, "dfd"];

const color: [number, number, number] = [1, 2, 3];

// [200, "OK"]
// [400, "Not Found"]
type HTTPResponse = [number, string];

const goodResponse: HTTPResponse = [200, "OK"];
const notFoundResponse: HTTPResponse = [400, "Not Found"];
// You can push after creating a tuple
goodResponse.push("yo");
// and typescript would not give any error

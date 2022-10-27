export {};

let zero: 0 = 0;
let hi: "hi" = "hi";
//  let hi: "hi" = "hello";     --> This will give error
let mood: "happy" | "sad" = "happy";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday";
// A function with a literal + union type
const giveAnswer = (answer: "yes" | "no" | "maybe") => {
  return `The answer is ${answer}.`;
};

giveAnswer("no");

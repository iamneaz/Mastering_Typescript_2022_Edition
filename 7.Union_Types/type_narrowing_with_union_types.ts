export {};

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "number") {
    return price * tax;
  } else {
    price = price.replace("$", "");
    return parseFloat(price) * tax;
  }
}

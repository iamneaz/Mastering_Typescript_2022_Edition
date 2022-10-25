function square(num: number): number {
    return num * num
}

// function greet(person: string) {
//     return `hi there, ${person}`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {

}

function greet(person: string = "stranger"): string {
    return `hi there, ${person}`;
}

square(3);
greet("Monkey D. Luffy");
greet();
doSomething("ChickenFace", 76, true);

function rando(num: number): string | number {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
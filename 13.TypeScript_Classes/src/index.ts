// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   private secretMethod(){
//     console.log("Secret Method");
//   }
// }

class Player {
  constructor(
    public first: string,
    public last: string,
    // private _score: number = 0
    protected _score: number = 0
  ) {}

  private secretMethod() {
    console.log("Secret Method");
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this._score;
  }
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999999;
  }
}
const elton = new Player("Elton", "Steele");
console.log(elton.fullName);

interface Colorfull {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorfull {
  constructor(public color: string) {}
}

class Jacket implements Colorfull, Printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

/*
 **  Abstract Class
 */
abstract class Employee {
  constructor(public firstName: string, public lastName: string) {}
  abstract getPay(): number;
  greet() {
    console.log("Hello");
  }
}

class FullTimeEmployee extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }
  getPay(): number {
    return 13;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(firstName, lastName);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 950000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Cosby", 24, 1000);
console.log(bill.getPay);

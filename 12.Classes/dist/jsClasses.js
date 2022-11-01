class Player{
    static description = "Player in our game"
    #score = 0;
    #numOfLives = 0;
    constructor(first, last){
        console.log("IN CONSTRUCTOR");
        this.first = first;
        this.last = last;
    }
    static randomPlayer(){
        new Player("Andy","Samberg");
    }
    get fullname(){
        return `${this.first} ${this.last}`;
    }
    set fullname(newName){
        const[first,last] = newName.split("");
        this.first = first;
        this.last = last;
    }
    get score(){
        return this.#score;
    }
    set score(newScore){
        if(newScore <0){
            throw new Error("Score must be positive");
        }
        this.#score = newScore;
        
    }
    updateScore(newScore){
        this.#score = newScore
    }
    taunt(){
        console.log("BOOYAH!")
    }
    loselife(){
        this.#numOfLives -= 1;
    }
}

class AdminPlayer extends Player{
    constructor(first,last,powers){
        super(first,last);
        this.powers = powers;
    }
    isAdmin = true;
}

const player1 = new Player("blue","steele");
player1.taunt();
console.log(player1.fullname)

const player2 = new Player("charlie","brown");
player2.taunt();

const admin = new AdminPlayer("admin","mcAdmin",["Destroy", "Restore"]);
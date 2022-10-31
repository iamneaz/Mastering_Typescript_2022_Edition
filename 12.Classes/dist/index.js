class Player{
    #score = 0;
    #numOfLives = 0;
    constructor(first, last){
        console.log("IN CONSTRUCTOR");
        this.first = first;
        this.last = last;
    }
    get fullname(){
        return `${this.first} ${this.last}`;
    }
    get score(){
        return this.#score;
    }
    set score(){
        
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

const player1 = new Player("blue","steele");
player1.taunt();
console.log(player1.fullname)

const player2 = new Player("charlie","brown");
player2.taunt();
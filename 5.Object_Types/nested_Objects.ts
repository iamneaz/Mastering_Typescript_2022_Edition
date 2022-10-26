// A function with a nested object type parameter
const describePerson = (
    person:{
        name:string;
        age: number;
        parentNames: {
            mom : string;
            dad: string;
        }
    }
):string => {
    return `Person: ${person.name},Age: ${person.age}, Parents: ${person.parentNames.mom} and ${person.parentNames.dad}`;
}

console.log(describePerson({name: "Shaq",age: 20,parentNames:{mom: "Mama shaq",dad: "Papa Shaq"}}));

type Song = {
    title: string, 
    artist:string, 
    numberOfStreams: number, 
    credits:{
        producer: string,
        writer: string
    }
}

const MFDOOMSong: Song = {
    title: "Meat Grinder",
    artist: "MF DOOM",
    numberOfStreams: 1000000000,
    credits:{
        producer:"MADVILLAIN",
        writer:"MF DOOM"
    }
}
function calcualtePayout(song: Song): number{
    let perStreamCost = .0033;
    return perStreamCost * song.numberOfStreams;
}

function printSong(song:Song): void{
    console.log(
        `Song Title: ${song.title} by ${song.artist}\nTotal Revenue: ${calcualtePayout(song)}`
    );
}

printSong(MFDOOMSong);


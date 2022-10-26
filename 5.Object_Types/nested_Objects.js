// A function with a nested object type parameter
var describePerson = function (person) {
    return "Person: ".concat(person.name, ",Age: ").concat(person.age, ", Parents: ").concat(person.parentNames.mom, " and ").concat(person.parentNames.dad);
};
console.log(describePerson({ name: "Shaq", age: 20, parentNames: { mom: "Mama shaq", dad: "Papa Shaq" } }));
var MFDOOMSong = {
    title: "Meat Grinder",
    artist: "MF DOOM",
    numberOfStreams: 1000000000,
    credits: {
        producer: "MADVILLAIN",
        writer: "MF DOOM"
    }
};
function calcualtePayout(song) {
    var perStreamCost = .0033;
    return perStreamCost * song.numberOfStreams;
}
function printSong(song) {
    console.log("Song Title: ".concat(song.title, " by ").concat(song.artist, "\nTotal Revenue: ").concat(calcualtePayout(song)));
}
printSong(MFDOOMSong);

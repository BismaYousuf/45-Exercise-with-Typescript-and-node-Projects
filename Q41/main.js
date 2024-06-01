"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
let magicianName = ["Amna", "Noor", "Muskan"];
function show_magicians() {
    magicianName.forEach(e => { console.log(e); });
}
show_magicians();

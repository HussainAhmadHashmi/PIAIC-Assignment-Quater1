"use strict";
// Question 41: Repeat previous questions but now modified array with the great magicians without change the original array like you can capy the array not only modified
Object.defineProperty(exports, "__esModule", { value: true });
const magicianNames = ["Suhani Shah", "David Copperfield", "Mohan Smith", "Ali Zaid", "Haroon Viky"];
function showMagicians(magicians) {
    for (const show of magicians) {
        console.log(show);
    }
}
function makeGreat(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
console.log(`Original Array`);
showMagicians(magicianNames);
console.log(`\nModified Array/ Copy of Original array`);
const greatMagicians = makeGreat([...magicianNames]); // Copying the array using the
showMagicians(greatMagicians);

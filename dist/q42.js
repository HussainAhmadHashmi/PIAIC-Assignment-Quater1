"use strict";
// Question 42: Repeat previous question but now modified array with the great magicians
Object.defineProperty(exports, "__esModule", { value: true });
const magicianNames = ["Suhani Shah", "David Copperfiel", "Mohan Smith", "Ali Zaid", "Haroon Viky"];
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
console.log(`\nModified Array`);
const greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);

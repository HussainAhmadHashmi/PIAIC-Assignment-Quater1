"use strict";
// Question 41: Make an aray for magicians and then write a function to return the names of magicians and then call the function.
const magicianNames = ["Suhani Shah", "David Copperfiel", "Mohan Smith", "Ali Zaid", "Haroon Viky"];
function showMagicians(magicians) {
    for (const show of magicians) {
        console.log(show);
    }
}
showMagicians(magicianNames);

"use strict";
// import { personName } from "./q2";
const personname = "Hussain Ahmad";
// console.log(personname);
// Lowercase
const lowerCaseName = personname.toLowerCase();
console.log(`To lowerCase Name: ${lowerCaseName}`);
// uppercase
const lowerUpperName = personname.toUpperCase();
console.log(`To lowerCase Name: ${lowerUpperName}`);
// Titlecase
const Alphabets = personname.toLowerCase().split("");
// console.log(Alphabets);
Alphabets[0] = (Alphabets[0].toUpperCase());
for (let x = 0; x < Alphabets.length; x++) {
    if (Alphabets[x] == " ") {
        Alphabets[x + 1] = Alphabets[x + 1].toUpperCase();
    }
}
const titleCase = Alphabets.join("");
console.log(`To TitleCase Name: ${titleCase}`);

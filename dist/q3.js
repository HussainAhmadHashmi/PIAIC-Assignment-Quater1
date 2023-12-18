"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q2_1 = require("./q2");
const personname = "Hussain Ahmad";
// console.log(personName);
// Lowercase
const lowerCaseName = q2_1.personName.toLowerCase();
console.log(lowerCaseName);
// Uppercase
const UpperCaseName = q2_1.personName.toUpperCase();
console.log(UpperCaseName);
// Titlecase
function titleCaseName(modify) {
    return modify.replace(/\b\w/g, (match) => match.toUpperCase());
}
const titleCase = titleCaseName(q2_1.personName);
console.log(q2_1.personName);

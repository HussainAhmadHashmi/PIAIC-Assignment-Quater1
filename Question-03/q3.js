"use strict";
const personName = "Hussain Ahmad";
// console.log(personName);
// Lowercase
const lowerCaseName = personName.toLowerCase();
console.log(lowerCaseName);
// Uppercase
const UpperCaseName = personName.toUpperCase();
console.log(UpperCaseName);
// Titlecase
function titleCaseName(modify) {
    return modify.replace(/\b\w/g, (match) => match.toUpperCase());
}
const titleCase = titleCaseName(personName);
console.log(personName);

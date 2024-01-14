"use strict";
// Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// import { personName } from "./q2";
// Whitespaces
const personName1 = `\t Hussain Ahmad \n`;
console.log(` '${personName1}'`);
// Stripping Name
const stripingName = personName1.trim();
console.log(stripingName);

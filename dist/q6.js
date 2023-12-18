"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q2_1 = require("./q2");
// Whitespaces
const personName1 = `\t Hussain Ahmad \n`;
console.log(` '${q2_1.personName}'`);
// Stripping Name
const stripingName = q2_1.personName.trim();
console.log(stripingName);

import { personName } from "./q2";
const personname:string = "Hussain Ahmad"
// console.log(personName);


// Lowercase
const lowerCaseName:string = personName.toLowerCase()
console.log(lowerCaseName);

// Uppercase
const UpperCaseName:string = personName.toUpperCase()
console.log(UpperCaseName);

// Titlecase
function titleCaseName (modify:string){
    return modify.replace(/\b\w/g, (match) => match.toUpperCase());
}

const titleCase = titleCaseName(personName)
console.log(personName);

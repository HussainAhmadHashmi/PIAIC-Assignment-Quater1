"use strict";
// Question 26: Make a function make shirt and print sizes of shirt with message
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size = "Large", message = "I love Typescript") {
    console.log(`You've ordered a ${size}-sized shirtand see "${message}" print on your shirt.`);
}
// Calling the function
makeShirt();
makeShirt("Small");
makeShirt("medium");

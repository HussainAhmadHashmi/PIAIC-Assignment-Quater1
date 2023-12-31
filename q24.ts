// Question 24: ests for equality and inequality with strings, arrays, AND, OR, NOT operator  

// String test
const x:number=11, y:number=30, z=25
const FirstString = "Pakistan"
const SecondString = "Pakistan" 
const ThirdString = "India"
console.log(`this condition is ${FirstString == SecondString}`);
console.log(`this condition is ${!(FirstString !== SecondString)}`);
console.log(`this condition is ${FirstString !== SecondString}`);
console.log(`this condition is ${!(FirstString == SecondString)}`);

// Tests lower case function
console.log(`Convert into lowercase:- ${FirstString.toLowerCase() == SecondString.toLowerCase()}`);
console.log(`Convert into lowercase:- ${FirstString.toLowerCase() !== SecondString.toLowerCase()}`);


// // Array test
const array:number[] = [1,2,3,4,5,6]
const array2:number[] = [] 

console.log("true outputs");
console.log(`this is ${array.length > 5}`);
console.log(`this is ${array.length >= 6}`);
console.log(`this is ${array.length <= 6}`);
console.log(`this is ${array.length == 6}`);
console.log(`this is ${array.length === 6}`);
console.log(`this is ${array.length !== 0}`);
console.log(`this is ${!(array.length == 7)}`);
console.log(`this is ${!(array == array2)}`);
console.log(`this is ${Array.isArray(array) && array.length > 5}`);
console.log(`this is ${Array.isArray(array) && array.length >= 6}`);


console.log("\n false outputs");
console.log(`this is ${array.length < 5}`);
console.log(`this is ${array.length <= 5}`);
console.log(`this is ${array.length >= 10}`);
console.log(`this is ${array.length == 7}`);
console.log(`this is ${array.length === 7}`);
console.log(`this is ${array.length !== 6}`);
console.log(`this is ${!(array.length !== 7)}`);
console.log(`this is ${(array == array2)}`);
console.log(`this is ${Array.isArray(array) && array.length < 5}`);
console.log(`this is ${Array.isArray(array) && array.length !== 6}`);


// AND and OR
console.log(`${(x > y && x === y)}`);
console.log(`${(x < y && x <= y && z > x)}`);
console.log(`${(x > y || x <= y)}`);
console.log(`${!(x > y || x <= y)}`);
console.log(`${(x > y && x <= y)}`);
console.log(`${(x > y || x <= y && z < x)}`);








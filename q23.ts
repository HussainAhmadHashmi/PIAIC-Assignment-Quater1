// Question 23: Write series of conditional test 
// variables
let a = 10, b= 1,b2= 15, c= "ahmad", d= true 
const Pak:string | null |undefined = null
let NotDeclearValue;
let nullableValue: boolean | null | undefined = true;
const fruits: string[] = ['apple', 'banana', 'orange'];
const sum: number[] = [1,2,3,4,5];

const ManName: { 
    name: string; 
    age: number 
} = 
{ 
    name: 'John', 
    age: 30 
};
let Student = {
    name: "Ali",
    address: {
        city: "Lahore",
    },
};
const isNotEmptyString: boolean = 'Hello' !== null;
const isEmptyString: boolean = 'Hello' == null;




console.log("\n \n  true==== Outputs");
// true
console.log(a > b);
console.log(a < 15);
console.log(b <= 1)
console.log(a >= b);
console.log(a != b);
console.log(a != b);
console.log(!(a === b));
console.log(c === "ahmad");
console.log(!(c !== "ahmad"));
console.log(c !== "john")
console.log(c === "ahmad" && d);
console.log(c === "ahmad" || d);
console.log(a > b && b < a && a != b);
console.log(a > b && b < a || a == b || a != b && c);
console.log((a > b || b > b2) && (c === "hello" || d));
console.log((a !== b && b < b2) || (c == "hello" && !d));
console.log(typeof a === 'number');
console.log(typeof c === 'string');
console.log(typeof d === 'boolean');
console.log(c.length > 0 ? true : false);
console.log(null == null);
console.log(undefined == undefined);
console.log(null == undefined);
console.log(`${Pak == null}`);
console.log(`${Pak == undefined}`);
console.log(`${Pak !== undefined}`);
console.log(NotDeclearValue ?? nullableValue);
console.log(`${fruits.length > 2}`);
console.log(`${fruits.length >= 3}`);
console.log(`${sum.length === 5}`);
console.log(`${ManName.age > 21 || ManName.name === "john"}`);
console.log(Student?.address?.city === "Lahore")
console.log(Student?.address?.city !== "Islambad")
console.log(`${isNotEmptyString} `);






console.log("\n \n false==== Outputs");

console.log(a < b);
console.log(b >= a)
console.log(a <= b);
console.log(a == b);
console.log(a === b);
console.log(c !== "ahmad");
console.log(c == "john");
console.log(a == b && b < a && a != b);
console.log((a < b || b > b2) && (c === "hello" || d));  
console.log((a === b && b < b2) || (c !== "hello" && !d));
console.log(`${Pak !== null}`);
console.log(typeof a === 'string');
console.log(typeof c === 'boolean');
console.log(typeof d === 'number');
console.log(c.length > 5 ? true : false);
console.log(`${fruits.length < 2}`);
console.log(`${fruits.length !== 3}`);
console.log(`${sum.length !< 5}`);
console.log(`${ManName.age > 21 && ManName.name === "john"}`);
console.log(`${ManName.age < 21 && ManName.name === "john"}`);
console.log(`${ManName.age > 32 && ManName.name === "john"}`);
console.log(`${ManName.age > 21 && ManName.name === "Ahmad"}`);
console.log(Student?.address?.city === "Islambad")
console.log(Student?.address?.city !== "Lahore")
console.log(`${isEmptyString} `);






















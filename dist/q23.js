"use strict";
var _a, _b, _c, _d;
// Question 23: Write series of conditional test 
// variables
let a = 10, b = 1, b2 = 15, c = "ahmad", d = true;
const Pak = null;
let NotDeclearValue;
let nullableValue = true;
const fruits = ['apple', 'banana', 'orange'];
const sum = [1, 2, 3, 4, 5];
const ManName = {
    name: 'John',
    age: 30
};
let Student = {
    name: "Ali",
    address: {
        city: "Lahore",
    },
};
const isNotEmptyString = 'Hello' !== null;
const isEmptyString = 'Hello' == null;
console.log("\n \n  true==== Outputs");
// true
console.log(a > b);
console.log(a < 15);
console.log(b <= 1);
console.log(a >= b);
console.log(a != b);
console.log(a != b);
console.log(!(a === b));
console.log(c === "ahmad");
console.log(!(c !== "ahmad"));
console.log(c !== "john");
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
console.log(NotDeclearValue !== null && NotDeclearValue !== void 0 ? NotDeclearValue : nullableValue);
console.log(`${fruits.length > 2}`);
console.log(`${fruits.length >= 3}`);
console.log(`${sum.length === 5}`);
console.log(`${ManName.age > 21 || ManName.name === "john"}`);
console.log(((_a = Student === null || Student === void 0 ? void 0 : Student.address) === null || _a === void 0 ? void 0 : _a.city) === "Lahore");
console.log(((_b = Student === null || Student === void 0 ? void 0 : Student.address) === null || _b === void 0 ? void 0 : _b.city) !== "Islambad");
console.log(`${isNotEmptyString} `);
console.log("\n \n false==== Outputs");
console.log(a < b);
console.log(b >= a);
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
console.log(`${sum.length < 5}`);
console.log(`${ManName.age > 21 && ManName.name === "john"}`);
console.log(`${ManName.age < 21 && ManName.name === "john"}`);
console.log(`${ManName.age > 32 && ManName.name === "john"}`);
console.log(`${ManName.age > 21 && ManName.name === "Ahmad"}`);
console.log(((_c = Student === null || Student === void 0 ? void 0 : Student.address) === null || _c === void 0 ? void 0 : _c.city) === "Islambad");
console.log(((_d = Student === null || Student === void 0 ? void 0 : Student.address) === null || _d === void 0 ? void 0 : _d.city) !== "Lahore");
console.log(`${isEmptyString} `);

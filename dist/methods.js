"use strict";
var _a;
// String============================
const myName = '  ahmad-hc  ';
// console.log(myName.length);
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(myName.charAt(2));
// console.log(myName.indexOf("t"));
// console.log(myName.substring(0, 4));
console.log(myName.slice(5));
// console.log(myName.trim());
// console.log(myName.replace('hc', 'br'));
// console.log(myName.includes("ahmad"));
// console.log(myName.split("-"));
// Numbers================================
const numbers = 1000000000; //25.5588
// console.log(numbers);
// console.log(numbers.toString());
// console.log(numbers.toString().length);
// console.log(numbers.toFixed(3));
// console.log(numbers.toPrecision(4));
// console.log(numbers.toLocaleString('en-PK'));
// Maths================================
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4, 5 , 7));
// console.log(Math.max(4, 5 , 7));
// console.log(Math.random());
// console.log((Math.random()*6) +1);
// console.log((Math.random()*6) +1);
// console.log(Math.floor((Math.random()*6) +1));
// Date and Time ================================
let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(Date.now());
// console.log(myDate.getTime());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getHours());
// console.log(myDate.getDay());
// console.log(myDate.getMonth());
// console.log(myDate.getFullYear());
// console.log(myDate.getUTCDate());
// console.log(myDate.getUTCDay());
// Arrays=============================
const myarr = ["h", "a", "b", 2, true];
const myarr2 = ["ahmad", 111, "hamza", 4];
myarr.push(...myarr2);
console.log(myarr);
// console.log(myarr.length);
console.log(myarr.push(...myarr2));
// console.log(myarr[3]);
myarr.concat(myarr2);
// console.log(myarr);
const arrAdd = [...myarr, ...myarr2];
// console.log(arrAdd);
// Methods      
// myarr.push("ezan")
// myarr.pop()
// myarr.unshift("zaqi")
// myarr.shift()
// console.log(myarr);
// console.log(myarr.includes("h"));
// console.log(myarr.indexOf("hamza"));
// console.log(myarr.join());
// console.log(myarr.slice(1,3));
// console.log(myarr.splice(1,3));
// console.log(Array.isArray("Hussain"));
// console.log(Array.from("Hussain Ahmad"));
// console.log(Array.of(myarr, myarr));
// extra
// // const anotherarray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12, 13]]];
// // const real_another_array= anotherarray.flat() //flat not in Typescript
// // console.log(real_another_array);
// Object==============================
// Templete Litlers
const mySym = Symbol("key1");
const user = {
    fname: "Hussain",
    "fullname": "Faraz",
    age: 18,
    email: "ahmad@gmail.com",
    isLoggedIn: false,
    lastLogIN: ["monday", "Saturday"],
    [mySym]: "myKey1",
    greeting: function () {
        console.log("Hello user");
    },
    greetingTwo: function () {
        console.log(`Hello user ${this.fname}`);
    },
};
const fbUser = {
    id: "123abc",
    name: "same",
    isLoggedIn: false,
};
// console.log(fbUser);
const regularUser = {
    email: "sum@gmail.com",
    UserfullName: {
        fullName: {
            firstName: "Ahmad",
            lastName: "Faraz",
            age: 17
        }
    }
};
// console.log(regularUser.fullName.userFullName);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const newObj1 = Object.assign({}, obj1, obj2);
// console.log(newObj1);
const sprdObj = Object.assign(Object.assign({}, obj1), obj2);
// console.log(sprdObj);
// const newObj2 = Object.assign(fbUser, regularUser)
// console.log(newObj2);
// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser)); //Not in TypeScript
// console.log(Object.entries(fbUser)); //Not in TypeScript
// console.log(Object.hasOwnProperty("name"));
// Object de-structure
const course = {
    name: "Js in Web",
    price: 900,
    courseTeacher: "ahmad"
};
const { courseTeacher: instructor } = course;
// console.log(instructor);
// functions ====================================
// function addTwoNumbers(number1:number, number2:number) {
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    // return number1 + number2
}
addTwoNumbers(2, 3);
// const result = addTwoNumbers(2, 3)
// console.log("Result",result);
function loginUserMsg(username) {
    return `${username} just logger in`;
}
// console.log(loginUserMsg("ahmad"));
// function calculateCartPrice(number1 :Number):Number {
//     return number1
// } 
// console.log(calculateCartPrice(200, 400, 700));
const users = {
    username: "Ezan",
    price: 199
};
function handleObject(anyobject) {
    // console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}
// console.log(users);
const myNewArray = [200, 300, 400];
function returnSecondValue(getArray) {
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
// this /Arrow function
const webUser = {
    username: "Ahmad",
    price: 900,
    welcomMessage: function () {
        // console.log(`${this.username}, welcome to our website`)
        // console.log(this);
    }
};
webUser.welcomMessage();
webUser.username = "sam";
webUser.welcomMessage();
// console.log(this);
// const addTwo = (num1:number, num2:number) => (num1 + num2)
const addTwo = () => ({ username: "kamil" });
// console.log(addTwo());
// /controlFlow========================
const emptyObj = { id: 1, fName: "Ahmad" };
if (Object.keys(emptyObj).length == 0) {
    // console.log("Object is empty");
}
let val1;
// val1 = 5 ?? 13
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = (_a = null !== null && null !== void 0 ? null : 10) !== null && _a !== void 0 ? _a : 17;
// console.log(val1);
// condition ? true : false
const iceteaPrice = 100; // Output: undefined (due to hoisting)
; // Error: 'w' is not defined
const arr = [1, 2, 3, 4, 5];
// for of
for (const num of arr) {
    // console.log(num);
}
const greetings = "hello world";
for (const great of greetings) {
    // console.log(great);
    if (great == " ") {
        continue;
    }
}
// maps
const map = new Map();
map.set("in", "India");
map.set("PK", "Pakistan");
map.set("IR", "IR");
// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ":-" , value);
}
const myObj = {
    Game1: "Taken",
    Game2: "GTA 5",
    Game3: "Angry Bird"
};
for (const key in myObj) {
    // console.log(`${key} :- ${myObj[key]}`);
}
const programming = ["html", "css", "javaScript", "html", "css", "javaScript"];
for (const key in programming) {
    // console.log(programming[key]);
}
// const map2 = new Map()
// map2.set("in", "India")
// map2.set("PK", "Pakistan")
// map2.set("IR", "IR")
// for (const key in map2) {
//     console.log(key);
// }
const coding = ["js", "ts", "java", "Ruby"];
// coding.forEach( function (item) {
//     console.log(item);
// } )
// coding.forEach((item) => {
//     console.log(item);
// })
function printMe(item) {
    // console.log(item);
}
coding.forEach(printMe);
coding.forEach((item, index, Array) => {
    // console.log(item, index, Array);
});
const myCoding = [
    {
        id: 1,
        name: "Ahmad",
        Address: "Lahore"
    },
    {
        id: 2,
        name: "Hussain",
        Address: "Karachi"
    },
    {
        id: 3,
        name: "faraz",
        Address: "Islamabad"
    }
];
myCoding.forEach((group) => {
    // console.log(group.Address);
});
// const programs:string[] = ["js", "ts", "java", "Ruby"]
// const values = programs.forEach( (item) => {
//     console.log(item);
//     return item
// } )
// console.log(values);
const programs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let values = programs.filter( (num) =>  {
//     return num > 5
// })
const newNums = [];
programs.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
});
// console.log(newNums);

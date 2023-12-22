"use strict";
// String============================
const myName = '  ahmad-hc  ';
// console.log(myName.length);
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(myName.charAt(2));
// console.log(myName.indexOf("t"));
// console.log(myName.substring(0, 4));
// console.log(myName.slice(-2));
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
// console.log(myarr);
// console.log(myarr.length);
// console.log(myarr.push(...myarr2));
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
console.log(Array.isArray("Hussain"));
console.log(Array.from("Hussain Ahmad"));
console.log(Array.of(myarr, myarr));
// const anotherarray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12, 13]]];
// const real_another_array= anotherarray.flat() //flat not in Typescript
// console.log(real_another_array);

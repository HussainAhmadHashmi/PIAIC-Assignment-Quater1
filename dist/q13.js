"use strict";
// Question 13: Repeat an Array and just change their values and what program is about
const Transportation = ["Car", 'MotorBike', "Bus", "Bucycle", "Auto"];
// =========================== Method 1 ======================
console.log(`I would like to own a :- ${Transportation[0]}`);
console.log(`I would like to own a :- ${Transportation[1]}`);
console.log(`I would like to own a :- ${Transportation[2]}`);
console.log(`I would like to own a :- ${Transportation[3]}`);
console.log(`I would like to own a :- ${Transportation[4]}\n`);
// =========================== Method 2 ======================
console.log("With For loop:");
for (let x = 0; x < Transportation.length; x++) {
    const element = Transportation[x];
    console.log(`I would like to own a :- ${element}`);
}
console.log("\n");
// =========================== Method 3 ======================
console.log("With For Each Function:");
Transportation.forEach(element => {
    console.log(`I would like to own a :- ${element}`);
});
console.log("\n");
// =========================== Method 4 ==================index, list
console.log("With For Map Function:");
Transportation.map((index, list) => {
    console.log(`${list}-I would like to own a:- ${index}`);
});
console.log("\n");
// =========================== Method 5 ======================
console.log("With For of:");
for (const list of Transportation) {
    console.log(`I would like to own a:- ${list}`);
}
console.log("\n");
// =========================== Method 6 ======================
console.log("With For in:");
for (const list in Transportation) {
    console.log(`I would like to own a:- ${Transportation[list]}`);
}

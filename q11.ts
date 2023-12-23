// Question 11: Print an array that each person name print in a verticall list.

const names:string[] = ["Ezan", 'Raja', "Moaz", "Zaqi", "Aqib", 'Ali']
console.log(names.slice(1));


// =========================== Method 1 ======================
console.log(`Simple Print from array index:- ${names[0]}`);
console.log(`Simple Print from array index:- ${names[1]}`);
console.log(`Simple Print from array index:- ${names[2]}`);
console.log(`Simple Print from array index:- ${names[3]}`);
console.log(`Simple Print from array index:- ${names[4]}`);
console.log(`Simple Print from array index:- ${names[5]}\n`);

// =========================== Method 2 ======================
console.log("With For loop:");
for (let x = 0; x < names.length; x++) {
    const element = names[x];
    console.log(`${element}`);   
}console.log("\n");

// =========================== Method 3 ======================
console.log("With For Each Function:");
names.forEach(element => {
    console.log(element);
});console.log("\n")

// =========================== Method 4 ==================index, list
console.log("With For Map Function:");
names.map( (index, list) => {
    console.log(`${list}-Index ${index}`);
});console.log("\n")

// =========================== Method 5 ======================
console.log("With For of:");
for (const list of names) {
    console.log(list);
    
}console.log("\n")

// =========================== Method 6 ======================
console.log("With For in:");
for (const list in names) {
    console.log(names[list]);
}




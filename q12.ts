// Question 12: repeat question 11 including print a same message for every array value

const friendsNames:string[] = ["Ezan", 'Raja', "Moaz", "Zaqi", "Aqib", 'Ali']

// =========================== Method 1 ======================
console.log(`How Are You Buddy:- ${friendsNames[0]}`);
console.log(`How Are You Buddy:- ${friendsNames[1]}`);
console.log(`How Are You Buddy:- ${friendsNames[2]}`);
console.log(`How Are You Buddy:- ${friendsNames[3]}`);
console.log(`How Are You Buddy:- ${friendsNames[4]}`);
console.log(`How Are You Buddy:- ${friendsNames[5]}\n`);


// =========================== Method 2 ======================
console.log("With For loop:");
for (let x = 0; x < friendsNames.length; x++) {
    const element = friendsNames[x];
    console.log(`Kesay Ho Brothers:- ${element}`);   
}console.log("\n");

// =========================== Method 3 ======================
console.log("With For Each Function:");
friendsNames.forEach(element => {
    console.log(`You SHould Code for your mental health:- ${element}`);
});console.log("\n")

// =========================== Method 4 ==================index, list
console.log("With For Map Function:");
friendsNames.map( (index, list) => {
    console.log(`${list}-You should respect your Parents and teachers:- ${index}`);
});console.log("\n")

// =========================== Method 5 ======================
console.log("With For of:");
for (const list of friendsNames) {
    console.log(`God Bless You:- ${list}`);
}console.log("\n")

// =========================== Method 6 ======================
console.log("With For in:");
for (const list in friendsNames) {
    console.log(`You know AI is the future of the world:- ${friendsNames[list]}`);
}




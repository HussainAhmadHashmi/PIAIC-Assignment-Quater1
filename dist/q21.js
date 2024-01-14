"use strict";
// Question 21: Create TypeScript Object and put something in it and print this.
// ================================= 1st Method ==============================
// Object Litlers
const languages = {
    1: "HTML5",
    2: "CSS",
    3: "Bootstrap5",
    4: "Talwind CSS",
    5: "JavaScript",
    6: "TypeScript",
    7: "React.js",
    8: "Next.js",
    9: "php",
    10: "My SQL"
};
console.log(`Show Object:-`);
console.log(languages);
console.log('\n Frontend Roadmap:');
console.log(`First of all learn basic of '${languages[1]}' and '${languages[2]}' after that learn some CSS frame work like "${languages[3]}", "${languages[4]}". When you complete basic of these languages then jump to next language is "${languages[5]}" and its framework "${languages[6]}" , and "${languages[7]}". When you complete all these languages then take some interest in backend development and learned "${languages[8]}", ${languages[9]}", ${languages[10]}".`);
// ================================= 2nd Method ==============================
// Object Constructor
const language2 = new Object({
    1: "HTML5",
    2: "CSS",
    3: "Bootstrap5",
    4: "Talwind CSS",
    5: "JavaScript",
    6: "TypeScript",
    7: "React.js",
    8: "Next.js",
    9: "php",
    10: "My SQL"
});
console.log(language2);

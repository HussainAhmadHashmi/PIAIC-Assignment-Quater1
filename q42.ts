// Question 42: Repeat previous question but now modified array with the great magicians

const magicianNames: string[] = ["Suhani Shah", "David Copperfiel", "Mohan Smith", "Ali Zaid", "Haroon Viky"];

function showMagicians(magicians: string[]): void {
    for (const show of magicians) {
        console.log(show);
    }
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

console.log(`Original Array`);
showMagicians(magicianNames);

console.log(`\nModified Array`);
const greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);



export {};

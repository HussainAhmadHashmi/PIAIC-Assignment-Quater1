// Question 41: Repeat previous questions but now modified array with the great magicians without change the original array like you can capy the array not only modified

const magicianNames: string[] = ["Suhani Shah", "David Copperfield", "Mohan Smith", "Ali Zaid", "Haroon Viky"];

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

console.log(`\nModified Array/ Copy of Original array`);
const greatMagicians = makeGreat([...magicianNames]); // Copying the array using the
showMagicians(greatMagicians);

export{}
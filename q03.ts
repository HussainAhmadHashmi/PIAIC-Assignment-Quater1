
// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. 

const personName:string = "Hussain ahmad"
console.log(`Original Name:- ${personName}`);

// lowercase
const LowerCase = personName.toLowerCase()
console.log(`Person Name Convert Into LowerCase:- ${LowerCase}`);

// Uowercase
const UpperCase = personName.toUpperCase()
console.log(`Person Name Convert Into UpperCase:- ${UpperCase}`);

// TitleCase
const Albhabets:string[] = personName.toLowerCase().split("")
Albhabets[0]= Albhabets[0].toUpperCase()

for (let x = 0; x < Albhabets.length; x++) {
    if (Albhabets[x] == " ") {
        Albhabets[x+1]= Albhabets[x+1].toUpperCase()
    }
}

const TitleCase = Albhabets.join("")
console.log(`Person Name Convert Into TitleCase:- ${TitleCase} \n`);





// =================================== 2nd Method ================================= 
const personName2:string = "Sir ZIA KHAN"
console.log(`Original Name:- ${personName2}`);

// LowerCase
console.log(`This is Titlecase Name:- ${personName2}`.toLowerCase());

// UpperCase
console.log(`This is Titlecase Name:- ${personName2}`.toUpperCase());

// Titlecase
console.log(`This is Titlecase Name:- ${personName2} \n`.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "));


// =================================== 3nd Method ================================= 

const personName3:string = "JAHANZAIB Tayyab"
console.log(`Original Name:- ${personName3}`);

// LowerCase
function lowercase(name:string) {
    return name.toLowerCase()  
}

// UpperCase
function Uppercase(name:string) {
    return name.toUpperCase()
}

// TitleCase
function Titlecase(name:string) {
    return name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
}
console.log("Lowercase Name:-" + lowercase(personName3));
console.log("Uppercase Name:-" + Uppercase(personName3));
console.log("Titlecase Name:-" + Titlecase(personName3));



























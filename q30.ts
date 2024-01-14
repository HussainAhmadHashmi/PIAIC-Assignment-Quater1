// Question 30:  Make a array of five, including the name 'admin'. Imagine you will print a greeting to each user after they log in to a website

const PeopleUsernames:string[] = [ "Ezan00123", "Aqib00345","Admin", "Ali000987", "Zaqi87654", "Raja12098"] 

for (const user of PeopleUsernames) {
    if (user === "Admin") {
        console.log(`Hello admin, would you like to see a status report? \n`);
    }
    else {
        console.log(`Hello ${user}, Thank you for logging in again.`);
    }
}







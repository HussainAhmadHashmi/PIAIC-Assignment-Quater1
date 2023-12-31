// Question 32: 

const current_users:string[] = ["Admin", "Ezan00123", "Aqib00345", "Ali000987", "Zaqi87654", "Raja12098"] 
const new_users:string[] = ["Ubab", "Adan", "Ali000987", "Zaqi87654", "Qasim", "Yawer", "Shahmeer", "Irtaza", "Hadi"]

for (const user of new_users) {
    const isUsernameTaken = current_users.some((existingUser) => existingUser.toLowerCase() === user.toLowerCase());

    if (isUsernameTaken) {
        console.log(`Sorry, the username '${new_users}' is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username '${new_users}' is available.`);
    }
}
    
// Question 32: 

const currentUsers: string[] = ["Ahmad123", "EZan234", "Ali444", "Raja112", 'Faraz456', "Zaqi 229"];
const newUsers: string[] = ["EZAN234", "Adan657", "Ali444", "Qasim100"];

for (const uniqueUsers of newUsers) {

    const usernameExists = currentUsers.some(
        currentUsername => currentUsername.toLowerCase() === uniqueUsers.toLowerCase()
    );

    if (usernameExists) {
        console.log(`Sorry, the username ${uniqueUsers} is already in use. Please enter a new username.`);
    } else {
        console.log(`The username ${uniqueUsers} is available.`);
    }
}

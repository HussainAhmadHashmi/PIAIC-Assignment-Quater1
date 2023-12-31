export const current_users: string[] = ["John", "Alice", "Bob", "Charlie", "Eve"];
const new_users: string[] = ["Alice", "Dave", "John", "FRANk", "Mallory"];

for (const newUser of new_users) {
    const isUsernameTaken = current_users.some((existingUser) => existingUser.toLowerCase() === newUser.toLowerCase());

    if (isUsernameTaken) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }
}


// for (const newUser of new_users) {
//     const isTaken = current_users.some(function (existingUser) {
//         return isUsernameTaken(existingUser, newUser);
//     });

//     if (isTaken) {
//         console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
//     } else {
//         console.log(`Congratulations! The username '${newUser}' is available.`);
//     }
// }

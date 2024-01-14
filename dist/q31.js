"use strict";
// Question 31: If the list of users is empty, print the message We need to find some users!
let usernames = ['ADMIN', 'Eric', 'Alice', 'Bob', 'Faizan'];
// Check if the list of users is not empty
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
else {
    // Loop through the array and print greetings
    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
    // Remove all usernames from the array
    usernames = [];
    // Check if the list of users is now empty
    if (usernames.length === 0) {
        console.log('\n We need to find some users!');
    }
}

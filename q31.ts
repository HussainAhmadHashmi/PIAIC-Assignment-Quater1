// Question 31: If the list of users is empty, print the message We need to find some users!

export const PeopleUsernames:string[] = [] 

if (PeopleUsernames.length === 0) {
    console.log('We need to find some users!');
} else {
    for (let username of PeopleUsernames) {
        if (username === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, welcome back!`);
        }
    }
}


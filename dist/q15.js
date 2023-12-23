"use strict";
// Question 15: invite a guest and make a list of guest and if any guest is missing than replace this guest with new guest
const InvitesList = ["Mr. Imran Khan", "Mr. Shah Rukh Khan", "Mr. Quaid-e-Azam Muhammad Ali Jinnah"];
// Original List
console.log("Original List\n");
for (const list of InvitesList) {
    console.log(`Dear! "${list}"
    I am inviting you for having Dinner. Could you please come \n`);
}
// Update list
const removeGuest = "Mr. Imran Khan";
const addNewGuest = "Mr. Shahid Afridi";
const NewInvitesList = [...InvitesList.filter((guest) => guest !== removeGuest), addNewGuest];
console.log("New Guest List:");
for (const list of NewInvitesList) {
    console.log(`Dear! "${list}"
    I am inviting you for having Dinner. Could you please come \n \n`);
}
// ================================= 2ns Method ==============================
console.log("===============================\n Simple for lopop Method");
// Original List
console.log("Original List\n");
const InvitesList2 = ["Mr. Imran Khan", "Mr. Shah Rukh Khan", "Mr. Quaid-e-Azam Muhammad Ali Jinnah"];
for (let i = 0; i < InvitesList2.length; i++) {
    console.log(`Dear! "${InvitesList2[i]}" You are the guest of the day \n`);
}
// Update list
const removeGuest2 = "Mr. Shah Rukh Khan";
const addNewGuest2 = "Mr. Shahid Afridi";
const NewInvitesList2 = [];
for (let i = 0; i < InvitesList2.length; i++) {
    if (InvitesList2[i] !== removeGuest2) {
        NewInvitesList2.push(InvitesList2[i]);
    }
}
NewInvitesList2.push(addNewGuest2);
console.log("\nNew Guest List:");
for (let i = 0; i < NewInvitesList2.length; i++) {
    console.log(`Dear! "${NewInvitesList2[i]}" You are the guest of the day \n`);
}

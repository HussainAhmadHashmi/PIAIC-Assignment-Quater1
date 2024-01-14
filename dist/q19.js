"use strict";
// Question 16:Use erercise 17 and Print a message indicating the number of people you are inviting to dinner."
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationList = void 0;
exports.InvitationList = ["Mr. Imran Khan", "Mr. Shah Rukh Khan", "Mr. Quaid-e-Azam Muhammad Ali Jinnah", "Mr. Babar Azam", "Ms. Benazir Bhutto"];
// Original List
console.log("Original List\n");
for (const list of exports.InvitationList) {
    console.log(`Dear! "${list}" you are invited to dinner \n`);
}
// Print a message about the limitation
console.log("\nDue to space limitations, only two people can be invited to dinner.\n");
// Remove guests until only two names remain
while (exports.InvitationList.length > 2) {
    const removedGuest = exports.InvitationList.pop();
    console.log(`Sorry, ${removedGuest}, you can’t invite them to dinner. \n`);
}
// Print messages to the remaining two guests
console.log("Remaining Guests:");
exports.InvitationList.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.We are wlcome! \n`));
// Count how many guest come on dinner.
console.log(`Number of people invited to dinner: ${exports.InvitationList.length}\n`);

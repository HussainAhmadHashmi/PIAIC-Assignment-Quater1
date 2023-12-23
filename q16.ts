// Question 16: Repeat exercise 16 and add some additional guests on dinner
export const InvitationList: string[] = ["Mr. Imran Khan", "Mr. Shah Rukh Khan", "Mr. Quaid-e-Azam Muhammad Ali Jinnah"];

// Original List
console.log("Original List\n");

for (const list of InvitationList) {
    console.log(`Dear! "${list}"
    I am inviting you for having Dinner. Could you please come \n`);
}

// Update list
const removeGUEST: string = "Mr. Imran Khan";
const addNewGUEST: string = "Mr. Shahid Afridi";
const additionalGuest: string[] = ["Ms. Malala Yousafzai", "Mr. Abdul Sattar Edhi", "Ms. Benazir Bhutto"];

const NewInvitationList: string[] = [...InvitationList.filter((guest) => guest !== removeGUEST), addNewGUEST, ...additionalGuest];

console.log("New Guest List:");
for (const list of NewInvitationList) {
    console.log(`Dear! "${list}"
    I am inviting you for having Dinner. Could you please come \n \n`);
}



// ================================= 2ns Method ==============================

console.log("===============================\n Simple for lopop Method");


// Original List
console.log("Original List\n");

const IInvitationList2: string[] = ["Mr. Imran Khan", "Mr. Shah Rukh Khan", "Mr. Quaid-e-Azam Muhammad Ali Jinnah"];

for (let i = 0; i < IInvitationList2.length; i++) {
    console.log(`Dear! "${IInvitationList2[i]}" You are the guest of the day \n`);
}

// Update list
const removeGUEST2: string = "Mr. Shah Rukh Khan";
const addNewGUEST2: string = "Mr. Atif Aslam";
const additionalGuest2: string[] = ["Mrs. Shafiqa Iqbal", "Mr. Babar Azam", "Ms. Benazir Bhutto"];

const NewIInvitationList2: string[] = [];

for (let i = 0; i < IInvitationList2.length; i++) {
    if (IInvitationList2[i] !== removeGUEST2) {
        NewIInvitationList2.push(IInvitationList2[i]);
    }
}

NewIInvitationList2.push(addNewGUEST2);
for (let i = 0; i < additionalGuest2.length; i++) {
    NewIInvitationList2.push(additionalGuest2[i]);
}

console.log("\nNew Guest List:");
for (let i = 0; i < NewIInvitationList2.length; i++) {
    console.log(`Dear! "${NewIInvitationList2[i]}" You are the guest of the day \n`);
}


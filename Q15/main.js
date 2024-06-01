"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print
//  a message to each person, inviting them to dinner.
let guest_list = ["Shehryar", "Ahmed", "Shah G"];
for (let i = 0; i < guest_list.length; i++) {
    console.log('\n Mr. \n' + guest_list[i] + ' i would to invite you at dinner party! \n \n Thank You!');
}
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to 
// send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the 
// name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you 
// are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let absentGuest = "Shah G";
let newGuest = "Ali";
guest_list[2] = newGuest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('\n Mr. \n' + guest_list[i] + ' i would to invite you at dinner party! \n \n Thank You!');
}
console.log(`\n Mr. ${absentGuest} is not comming to the dinner`);

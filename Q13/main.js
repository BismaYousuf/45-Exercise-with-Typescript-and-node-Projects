"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//  and make a list that stores several examples. Use your list to print a series of statements about these 
//  items, such as “I would like to own a Honda motorcycle.”
let transportation = ["BMW", "BRV", "CIVICS", "BUGATI"];
for (let i = 0; i < transportation.length; i++) {
    let message = "I would like to own a";
    console.log(message, transportation[i]);
}

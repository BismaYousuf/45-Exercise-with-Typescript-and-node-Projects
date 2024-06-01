"use strict";
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, 
// countries, cities, languages, or anything else you’d like. Write a program that creates a list containing 
// these items.
// let array: string[] = ["English", "Urdu", "Arabic", "Farsi"]  
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
const programmingLanguages = ["Python", "JavaScript", "Java", "C++", "Ruby", "Swift", "Go", "Kotlin", "PHP", "Rust"];
// Print the list
console.log("List of Programming Languages:");
programmingLanguages.forEach(language => {
    console.log(language);
});

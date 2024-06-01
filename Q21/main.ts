// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

type Tstudent = 
{
    name : string
    age : number
    isStudent: boolean
}

let data: Tstudent = {
    name: "Bisma",
    age: 23,
    isStudent: true
}

console.log(data["age"]);

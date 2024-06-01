
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one False 
//  result for each of the following:

// • Tests for equality and inequality with strings

let a = "Bisma"
console.log(a == "Ayesha"); //False
console.log(a == "Bisma"); //True

// • Tests using the lower case function
 let b = "Mango"
 console.log(b.toLowerCase() == "mango"); //true

//  Numerical tests involving equality and inequality,

let c = 70

console.log(c == 80); //false
console.log(c != 90); //true

// greater than and less than,

console.log(c < 100); //true
console.log(c > 100); // false

// greater than or equal to, and less than or equal to
console.log(c <= 70); //true
console.log(c >= 80); //false

// Tests using "and" and "or" operators
console.log(c == 70 && c == 70); //true
console.log(c == 80 || c == 80); //false

// Test whether an item is in a array
 let d: string[] = ["apple", "mango", "orange"]
 console.log(d.includes("apple")); //true

//  Test whether an item is not in a arrayconsole.log(d.includes("watermelon")); //false

 

 
"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
//  I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size 
//  with a different message.
function make_shirt(size = "medium", message = "I love typescript") {
    console.log(`i want ${size} size of shirt and print ${message}`);
}
make_shirt();
make_shirt("small");
make_shirt("large", "I love python!");

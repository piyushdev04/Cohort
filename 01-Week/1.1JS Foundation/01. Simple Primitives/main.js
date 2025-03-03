// basics: let, var, const

var a = 1;
a = 3;
console.log(a);



// Data types - strings, numbers and booleans

let firstname = "Piyush";
let age = 20;
let isMarried = false;
console.log("this persons name is " + firstname + " and their age is " + age)



// If/else statements

// let firstname = "Piyush";
// let age = 20;
// let isMarried = false;

if (isMarried == true) {
    console.log(firstname + " is married");
} else {
    console.log(firstname + " is not married");
}



// loops - For loop
// Q. add 1 to 100
let answer = 0;

for(let i = 0; i<=100; i++) {
    answer = answer + i;
}

console.log(answer)
// Counting from 1 to 5
for(let i=1; i<=5; i++){
    console.log(i);
}

// Add all numbers from 1 to 50
let ans = 0;
for (let i=1; i <= 50; i++){
    ans = ans + i;
}
console.log(ans);

// Looping through an array
const fruits = ["Apple", "Banana", "Cherry"];
for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// Looping backwards
for (let i=5; i >= 1; i--){
    console.log(i);
}

// Printing Even Numbers (0 to 10)
for (let i = 0; i<=10; i += 2){
    console.log(i);
}

// Printing Odd Numbers (1 to 9)
for (let i=1; i<10; i+=2){
    console.log(i);
}

// Looping Through a string
const word = "Hello";
for (let i=0; i<word.length; i++){
    console.log(word[i]);
}

// Looping Through an Array with Index
const colors = ["Red", "Green", "Blue"];

for (let i=0; i < colors.length; i++) {
    console.log(`Color ${i}: ${colors[i]}`);
}

// Nested for Loop (Multiplication Table for 1-3)
for (let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Looping with break (Stop at 5)
for (let i=1; i<=10; i++){
    if(i === 5) {
        console.log("Stopping at 5");
        break;
    }
    console.log(i);
}

// Looping with continue (Skip 5)
for (let i=1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skips 5
    }
    console.log(i);
}
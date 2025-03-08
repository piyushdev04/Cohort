/*
    Reading the contents of a file
*/

const fs = require('fs');
const path = require('path');

console.log("Starting file read...");

const filePath = path.join(__dirname, 'example.txt');
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

console.log("Starting expensive operation....");

let sum = 0;
for (let i = 0; i < 1e9; i++) {
    sum += i;
}

console.log("Expensive operation completed, sum:", sum);
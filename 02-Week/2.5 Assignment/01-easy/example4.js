/*
    Write to a file
*/

const fs = require('fs');
const path = require('path');

console.log("Starting file write....");

const content = "Hello, this is a test write operation using fs module in Node.js!";
const filePath = path.join(__dirname, 'example.txt');

fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
        console.error("Error writing to file:", err);
        return;
    }
    console.log("File write successful! File path:", filePath);
});

console.log("Performing other tasks while file is being written...");
/*
    File cleaner
    Read a file, remove all the extra spaces and write it back to same file.
*/

const fs = require('fs');
const path = require('path')

console.log("Reading file...");
const filePath = path.join(__dirname, 'example.txt');
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    console.log("Cleaning file content...");

    const cleanedData = data.replace(/\s+/g, ' ').trim();

    console.log("Writing cleaned content back to file...");

    fs.writeFile(filePath, cleanedData, 'utf8', (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("File cleaned successfully!");
    });
});
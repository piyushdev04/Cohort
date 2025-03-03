const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "a.txt"), "utf-8", function (err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});
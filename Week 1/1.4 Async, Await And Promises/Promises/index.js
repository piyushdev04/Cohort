const fs = require('fs');
const path = require("path");

// my own asynchronous function
function ReadFile() {
    console.log("insideReadFile");
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile(path.join(__dirname, "a.txt"), "utf-8", function(err, data) {
            console.log("before resolve");
            resolve(data);
        });
    })
}

// callback function to call
function onDone(data) {
    console.log(data)
}

ReadFile().then(onDone);
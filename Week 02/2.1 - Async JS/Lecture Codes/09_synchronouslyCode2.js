// import the fs module
const fs = require("fs");

// read the contents of the file a.txt and store it in the variable data asyn using the readFile method
fs.readFile("a.txt", "utf-8", function(err, data){
console.log("data");
});


// read the contents of the file a.txt and store it in the variable data2 asyn using the readFile method
fs.readFile("b.txt", "utf-8", function(err, data2){
    console.log("data2");
    });
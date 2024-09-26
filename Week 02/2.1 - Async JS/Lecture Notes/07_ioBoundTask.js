// import an external fs module
const fs = require('fs');

// read file a.txt and store its content in content variable
const contents = fs.readdirSync("a.txt", "utf-8"); // synchronous way of reading

// print the contents of the file
console.log(contents);
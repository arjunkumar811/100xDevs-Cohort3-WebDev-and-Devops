// import the fs module
const fs = require("fs");

// read the contents of the file a.txt and store it in the variable contents2 synchronously using the readFileSync method
const contents1 = fs.readdirSync("a.txt", "uft8");


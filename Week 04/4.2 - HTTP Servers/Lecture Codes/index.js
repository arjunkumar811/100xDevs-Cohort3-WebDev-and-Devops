const express = require("express");

const app = express();

let todos = [];

app.post("/", function(req, res){
    

    todos.push({
        title: "Learn Backend",
        id: 1
    });
});

app.delete("/", function(req, res){

     todos.pop();
});

app.get("/", function(req, res){
    res.send(todos);
});

app.listen(3000);



/*
// create a route handler for GET request on the root URL
// app.get('/', function (req, res) {
//     // send a response to the client
//     res.send('Hello World!');
// });

app.get("/", (req, res) => {
    // send a response to the client
    // res.send('Hello World!');
    res.send("<h1>Hello World!</h1>");
});

// create a route handler for GET request on the about URL
app.get("/about", (req, res) => {
    // send a response to the client
    res.send("About Page");
});


// create a route handler for POST request on the root URL
app.post("/", function (req, res) {
    res.send("Hello World! from the POST request");
});
*/
// function to add two numbers
function sum(a, b) {
    return a + b;
}

// function to sub two numbers
function sum(a, b) {
    return a - b;
}

// function to mul two numbers
function sum(a, b) {
    return a * b;
}

// function to division two numbers
function sum(a, b) {
    return a / b;
}


function doOperation(a, b, op) {
    let val = op(a, b);
    return val;
}

let ans1 = doOperation(1, 2, sum);
console.log(ans1);
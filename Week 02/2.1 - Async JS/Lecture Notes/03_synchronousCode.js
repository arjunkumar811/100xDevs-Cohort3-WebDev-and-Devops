// Syncronous code - code that runs line by line and waits for the current line to finish before moving to the next line 

// function to calculate the sum of number from 1 to n
function sum(num){
    // variable to store the sum
    let ans = 0;
    // loop to iterate from 1 to n
    for(let i = 0; i<=num; i++){
        // adding the current number to the sum
        ans = ans + i;
    }
    // returning the sum of numbers from 1 to n
    return ans;
}


// calling the function and storing the result in a variable
let result = sum(20);
// printing the result
console.log(result); //210



// calling the function and storing the result in a variable
let result1 = sum(30);
// printing the result
console.log(result1); // 465



// calling the function and storing the result in a variable
let result2 = sum(40);
// printing the result
console.log(result2); // 820
// function to calculate the sum of numbers from 1 to n
function sum(num){
    // variable to store the sum
    let ans = 0;
    // loop to iterate from 1 to n
    for(let i = 1; i <= num; i++){
        // adding the current number to the sum
        ans = ans + i;
    }
    //returning the sum of numbers from 1 to n
    return ans;
}

// calling the function and storing the result in a variable
let result = sum(30);

//printing the result
console.log(result); // 465
// Try to create promisified vertion of SetTimeout

//function to create a promisified version of setTimeout
function promisifiedSetTimeout(time){

    // return a promise that resolves after the given time
    return new Promise((resolve, reject)=>{
        //set a timeout for the given time
        setTimeout(() => {
            //resovle the promise after the given time
            resolve();
        }, time);
    });
}

// call the promisifiedSettimeout function with a time of 5 seconds
promisifiedSetTimeout(5000).then(()=>{
    console.log("Called after 5 secound");
});
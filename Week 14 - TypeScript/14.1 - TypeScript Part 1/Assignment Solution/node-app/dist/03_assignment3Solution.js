"use strict";
// Create a function that takes another function as input, and runs it after 1 second.
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("Arjun"); // arjun every one sec
});

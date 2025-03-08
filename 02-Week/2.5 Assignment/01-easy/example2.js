/*
    Counter without setInterval
    Hint: setTimeout
*/

let counter = 0;

function incrementCounter() {
    console.log(counter);
    counter++;
    setTimeout(incrementCounter, 1000);
}

incrementCounter();
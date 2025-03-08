/* 
    Create a counter in JavaScript
    code a counter it should go up as time goes by in interval of 1 second
*/
let counter = 0;

setInterval(() => {
    console.log(counter);
    counter++;
}, 1000);
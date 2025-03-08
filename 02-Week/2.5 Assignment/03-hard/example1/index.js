const wait = require('./wait');

const n = 5;

console.log(`Waiting for ${n} seconds....`);
wait(n).then(() => console.log(`${n} seconds have passed!`));
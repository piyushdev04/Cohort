const sleep = require('./sleep');

const n = 5;

console.log(`Sleeping for ${n} seconds....`);
sleep(n*1000).then(() => console.log(`Woke up after ${n} seconds!`));
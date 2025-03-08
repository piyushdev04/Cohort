const calculateTime = require('./calculateTime');

calculateTime(3, 2, 1).then((time) => {
    console.log(`Total time taken: ${time} ms`);
});
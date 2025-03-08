function sleep(milliseconds) {
    return new Promise((resolve) => {
        const start = Date.now();
        while (Date.now() - start < milliseconds) {
            // Busy-wait: Keeps looping until the time has passed
        }
        resolve();
    });
}

module.exports = sleep;
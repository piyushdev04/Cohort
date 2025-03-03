// 1. Create a counter in Javascript (counts down from 30 to 0)
function countdown() {
    for (let i=30; i >= 0; i--) {
        setTimeout(() => console.log(i), (30 - i) * 1000);
    }
}

// Start the countdown
countdown();


// 2. Calculate the time it takes between a setTimeout call and the inner function actually running
const start = Date.now();

setTimeout(() => {
    const end = Date.now();
    console.log(`Actual delay: ${end - start} ms`);
}, 1000);


// 3. Create a terminal clock (HH:MM:SS)
setInterval(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    console.clear();
    console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);
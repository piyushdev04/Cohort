/*
    What is await?
    - await is used to pause the function until a Promise is done.
    - it makes asynchronous code look like normal step-by-step code.
*/

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching data...");
    let data = await fetchData();
    console.log(data);
}

getData();
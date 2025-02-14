/*
    Implement a function  `calculateTotalSpentByCategory` which takes a list of transactions as parameter
    and return a list of objects where each object is unique category-wise and has total price spent as its value.
    transactions is an array where each
    Transaction - an object like

        {
            id: 1,
            timestamp: 165607680000,
            price: 10,
            category: 'Food',
            itemName: 'Pizza',
        }
    Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    const result = [];

    transactions.forEach(transaction => {
        const existingCategory = result.find(item => item.category === transaction.category);

        if (existingCategory) {
            existingCategory.totalSpent += transaction.price;
        } else {
            result.push({ category: transaction.category, totalSpent: transaction.price});
        }
    });

    return result;
}

// Example 1: Single transaction in one category
const transaction1 = [
    {id: 1, timestamp: 1656076800000, price:10, category: 'Food', itemName: 'Pizza'}
];

// Example 2: Multiple transactions in the same category
const transaction2 = [
    {id: 1, timestamp: 1656076800000, price:10, category: 'Food', itemName: 'Pizza'},
    {id: 2, timestamp: 1656163200000, price: 5, category: 'Food', itemName: 'Burger'}
];

// Example 3: Multiple categories
const transaction3 = [
    {id: 1, timestamp: 1656076800000, price:10, category: 'Food', itemName: 'Pizza'},
    {id: 2, timestamp: 1656163200000, price: 5, category: 'Food', itemName: 'Burger'},
    {id: 3, timestamp: 1656249600000, price: 15, category: 'Transport', itemName: 'Bus Ticket'}
];

// Example 4: Different prices and categories
const transaction4 = [
    {id: 1, timestamp: 1656076800000, price:10, category: 'Food', itemName: 'Steak'},
    {id: 2, timestamp: 1656163200000, price: 5, category: 'Food', itemName: 'Pasta'},
    {id: 3, timestamp: 1656249600000, price: 15, category: 'Transport', itemName: 'Taxi Ride'},
    {id: 4, timestamp: 1656336000000, price: 25, category: 'Transport', itemName: 'Train Ticket'}
];

// Call the function and log the result for each example
console.log(calculateTotalSpentByCategory(transaction1));
console.log(calculateTotalSpentByCategory(transaction2));
console.log(calculateTotalSpentByCategory(transaction3));
console.log(calculateTotalSpentByCategory(transaction4));
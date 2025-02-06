// Functions
// 1. Abstract out logic in your program
// 2. Take arguments as an input
// 3. Return a value as an output
// 4. You can think of them as an independent program that is supposed to do something given an input
// 5. Functions CAN take other functions as input - this will confuse you (callbacks)

// Q. Write a function that finds the sum of two numbers

// Q. Write another function that displays this result in a pretty format

// Q. Write another function that takes this sum and prints it in passive tense

// Function to find the sum of two numbers
function sum(a, b) {
    return a + b;
}

// Function to display the result in a pretty format
function display(value) {
    console.log(`The result is: ${value}`);
}

// Function to print the sum in passive tense
function passive(value) {
    console.log(`The sum has been calculated as ${value}`);
}

const value = sum(1, 2);
display(value);
passive(value);
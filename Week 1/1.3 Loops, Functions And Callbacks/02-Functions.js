// Functions

// A set of statements that performs a task or calculates a value.
// It should take some input and return an output where there is some obvious relationship between the input and the output.

// findSum (1 to 100)
function findSum(n) {
    let ans = 0;
    for (let i=1; i<n; i++){
        ans = ans + i;
    }
    return ans;
}

let ans = findSum(100)
console.log(ans);

// Functions with Parameters
function greet(name) {
    console.log("Hello, " +name+ "!");
}
greet("Alice");
greet("Bob");

// Function with Return Value
function add(a,b) {
    return a + b;
}

let sum = add(5, 4);
console.log(sum);

// Function to Check Even or Odd
function isEven(number) {
    return number % 2 == 0;
}
console.log(isEven(4));
console.log(isEven(7));

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4,5));

// Function with Default Parameter
function greet(name = "Guest"){
    console.log("Hello, " + name + "!");
}
greet();
greet("John");

// Function Returning an Array
function getNumbers() {
    return [1,2,3,4,5];
}
console.log(getNumbers());

// Function Calling Another Function
function square(num) {
    return num * num;
}

function printSquare(n) {
    console.log("Square of", n, "is", square(n));
}

printSquare(6);

// Function Expression (Anonymous Function)
const divide = function(a,b){
    return a / b;
};
console.log(divide(10,2));
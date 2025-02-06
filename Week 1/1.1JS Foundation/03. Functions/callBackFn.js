// Callback simple Example

function calculateArithmetic(a,b, arithmeticFinalFunction) {
    const ans = arithmeticFinalFunction(a, b)
    return ans;
}

function sum(a, b) {
    return a + b;
}

const value = calculateArithmetic(1, 2, sum);
console.log(value);

// Callback example 2

function sum(num1, num2, fnToCall) { // fnToCall for calling display result
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

const ans = sum(1, 2, displayResult); // displayResult [fnToCall] -> CallBacks
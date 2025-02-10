// Array handbook

// Array: push, pop, shift, unshit, splice, slice, concat, forEach, map, filter, reduce, find, sort

// push()
function pushExample(arr, element) {
    console.log("Original Array:", arr);

    arr.push(element);
    console.log("After push:", arr);
}
pushExample([1,2,3],4);

// pop()
function popExample(arr) {
    console.log("Original Array:", arr);

    arr.pop();
    console.log("After shift:", arr);
}
popExample([1,2,3]);

// shift()
function shiftExample(arr) {
    console.log("Original Array:", arr);

    arr.shift()
    console.log("After shift:", arr);
}
shiftExample([1,2,3]);

// unshit()
function unshiftExample(arr, element) {
    console.log("original Array:", arr);

    arr.unshift(element);
    console.log("After unshift:", arr);
}
unshiftExample([1,2,3],0);

// concat()
function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);

    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
}
concatExample([1,2,3],[4,5,6]);
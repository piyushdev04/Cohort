// Array handbook

// Array: push, pop, shift, unshit, splice, slice, concat, forEach, map, filter, reduce, find, sort

// push()
function pushExample(arr, element) {
    console.log("Original Array:", arr);

    arr.push(element);
    console.log("After push:", arr);
}
pushExample([1,2,3],4);
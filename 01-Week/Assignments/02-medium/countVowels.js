/*
    Implement a function `countVowels` that takes a string as an argument and returns the number
    Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

    Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)){
            count ++;
        }
    }

    return count;
}

console.log(countVowels("Hello World"));
console.log(countVowels("Batman"));
/*
    Write a function `isAnagram` which takes 2  parameters and return true/false if those are anagrams or not.
    What's Anagram?
    - A word, phrase, or name formed by rearranging the letters of another, such as spar, found from rasp.
*/

function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

module.exports = isAnagram;
// Write a function that checks if two given strings are anagrams of each other.

function isAnagram(str1, str2) {
    let cleanStr1 = str1.replace('').toLowerCase();
    let cleanStr2 = str2.replace('').toLowerCase();
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }
    let charCount1 = {};
    let charCount2 = {};
    for (let char of cleanStr1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let char of cleanStr2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("madam", "madam")); 
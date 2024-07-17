// Write a function that takes an array and returns a new array with duplicates removed.

function removeDuplicates(arr) {
    let unique = new Set(arr);
    let uniqueArray = Array.from(unique);
    return uniqueArray;
}
let arrayWithDuplicates = [1, 2, 7, 7, 5, 4, 4, 5, 7];
let uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); 
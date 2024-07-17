// Write a function that takes a nested array and returns a flattened array.

function flatArray(arr) {
    let flattened = [];

    arr.forEach(item => {
        if (Array.isArray(item)) {
            flattened = flattened.concat(flatArray(item));
        } else {
            flattened.push(item);
        }
    });

    return flattened;
}
nestedArray = [1, [45, [3, [4]], 59], [6, [72, 81]]];
console.log(flatArray(nestedArray));
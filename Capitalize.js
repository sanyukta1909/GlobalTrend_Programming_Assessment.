// Write a function that takes a string and capitalizes the first letter of each word in the string.

function capitalize(str) {
    let words = str.split(' ');
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalizedWords.join(' ');
}
let sentence = "this is a global trend assesment test.";
let capitalizedSentence = capitalize(sentence);
console.log(capitalizedSentence);

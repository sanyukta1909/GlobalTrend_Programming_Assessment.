// Write a function that converts a given string to title case (capitalizing the first letter of each word).

function TitleCase(str) {
    let words = str.split(' ');
    let titleCasedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return titleCasedWords.join(' ');
}
let sentence = "hello world! this is a test.";
let titleCasedSentence = TitleCase(sentence);
console.log(titleCasedSentence);

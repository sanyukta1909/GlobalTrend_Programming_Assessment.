// Write a function that filters out even numbers from an array.

    function EvenNumbers(arr) {
        return arr.filter(num => num % 2 === 0);
    }
    let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let evenNumbersArray = EvenNumbers(Numbers);
    console.log(evenNumbersArray); 
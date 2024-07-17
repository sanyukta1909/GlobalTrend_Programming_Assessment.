// Write a function that generates the first n numbers of the Fibonacci sequence.

function FibonacciSeries(n) {
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    if (n === 1) {
        return [0];
    }
    return fibonacci.slice(0, n);
}
let n = 10;
let fibonacciSequence = FibonacciSeries(n);
console.log(fibonacciSequence); 
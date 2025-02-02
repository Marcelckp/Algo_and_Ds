const tailFactorial = (num, accumulator = 1) => {
    if (num === 0) return accumulator;
    return tailFactorial(num - 1, num * accumulator);
}

console.log(tailFactorial(5)); // 120
console.log(tailFactorial(4)); // 24
console.log(tailFactorial(4) * 5); // 120 -> An example of broken factorial 5
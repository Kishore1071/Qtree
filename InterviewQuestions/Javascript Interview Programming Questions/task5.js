// Write a JavaScript program to calculate the factorial of a given number


const Factorial = number => {

    if (number === 0 || number === 1) return 1

    return number * Factorial(number - 1)
}

console.log(Factorial(10))
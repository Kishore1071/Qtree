// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers


// Method 1: Using BuiltIns

const EvenNumbers1 = number_array => number_array.filter(x => x % 2 === 0)

let result1 = EvenNumbers1([4,34,65,33,546,7])

console.log(result1, "result1")


// Method 2: Manual

const EvenNumbers2 = number_array => {

    let even_numbers = []

    for (let x of number_array) if (x % 2 === 0) even_numbers.push(x)

    return even_numbers
}

let result2 = EvenNumbers2([34,523,56,43,56,76,90,23])

console.log(result2, "result2")
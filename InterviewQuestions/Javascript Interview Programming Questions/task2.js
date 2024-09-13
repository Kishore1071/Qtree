// Write a JavaScript program to find the maximum number in an array


// Method 1: Using BuiltIns

const number_array1 = [43,65,2,7,3,78]

let maximum_number1 = Math.max.apply(null, number_array1)

console.log(maximum_number1, "maximum_number1")


// Method 2: Without Math module

const number_array2 = [54,65,2,7,3,34]

let maximum_number2 = 0

for (let x of number_array2) {

    if (x > maximum_number2) maximum_number2 = x
}

console.log(maximum_number2, "maximum_number2")
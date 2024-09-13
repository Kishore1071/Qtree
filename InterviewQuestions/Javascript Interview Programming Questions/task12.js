// Write a Javascript program to sort the array of numbers

let number_array = [23,134,42,43,2,56,7,34,2,34,5,67,6,56,67,456,87,798,862]

let sorted_array = []

while (number_array.length > 0) {

    minimum_number = Math.min.apply(null, number_array)

    min_number_index = number_array.indexOf(minimum_number)

    number_array.splice(min_number_index, 1)

    sorted_array.push(minimum_number)
}

console.log(sorted_array);
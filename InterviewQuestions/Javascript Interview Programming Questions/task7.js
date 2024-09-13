// Write a JavaScript program to creat an array with the largest element in each value of two dimensional array

let two_d_array = [
    [34,45,7,354,67,54,57,9],
    [46,879,3,546,92,65,81,86],
    [67,69,223,94,702,39,27,61]
]

let three_d_array = [
    [
        [5,3,2,5],
        [45,56,34,2]
    ],
    [
        [34,6,4,2,39,97],
        [73,9,3,63,4,64]
    ]
]

let array_of_max_values1 = []

for (let x of two_d_array) array_of_max_values1.push(Math.max.apply(null, x)) 

console.log(array_of_max_values1)


let array_of_max_values2 = []

for (let y of three_d_array) {

    for (let x of y) array_of_max_values2.push(Math.max.apply(null, x))
}

console.log(array_of_max_values2)


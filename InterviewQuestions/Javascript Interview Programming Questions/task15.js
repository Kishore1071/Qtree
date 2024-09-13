// Write a Javascript program to test that one word can be formed with the letters of another word

let source = "inside"
let sample = "den"

let source_array = source.split('')
console.log(source_array)

let possible = true

for (let x of sample) {
    let letter_index = source_array.indexOf(x)
    if (letter_index !== -1) source_array.splice(letter_index, 1)
    else  {
        possible = false
        break
    }
}

if (possible === true) console.log("We can form the word")
else console.log("We can't form the word")

// Write a JavaScript function to check if a given string is a palindrome


// Method 1: With builtin functions

const Palindrome1 = word => {
    let string_to_array = word.split('')
    let reverse_of_array = string_to_array.reverse()
    let new_string = reverse_of_array.join('')

    if (word === new_string) return "This is a palindrome"
    else return "This is not a palindrome"
}

let result1 = Palindrome1('tiger')

console.log(result1, ", result1")


// Method 2: Manual

const Palindrome2 = word => {
    let new_string = ''

    for (let x of word) new_string = x + new_string

    if (word === new_string) return "This is a palindrome"
    else return "This is not a palindrome"
}

let result2 = Palindrome2("reviver")

console.log(result2, ",result2")
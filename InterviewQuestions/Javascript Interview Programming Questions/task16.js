// Write a javascript program to find the common prefix of strings in the given array

let main = ['chain', 'chair', 'channel', ]

let index = 0

let letters = []

let n = true

while (n) {

    let result = main.filter(data => data[index] === main[0][index])

    if (result.length === main.length) {

        letters.push(main[0][index])
        index = index + 1
    }
    else {
        n = false
        break
    }
}

let prefix = letters.join('')

console.log(prefix)
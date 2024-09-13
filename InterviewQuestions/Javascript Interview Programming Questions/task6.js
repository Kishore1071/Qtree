// Write a JavaScript program to given an array contains prime numbers from 0 to 100

let prime_numbers = []

for (let i = 0; i <= 100; i ++) {
    
    if (i === 0 || i === 1) continue
    else {

        let is_prime = true
        
        for (let y = 2; y < i; y ++) {

            if (i % y === 0) {

                is_prime = false

                break
            }
        }

        if (is_prime === true) prime_numbers.push(i)
    }
}

console.log(prime_numbers)
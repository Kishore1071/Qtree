// Write a Javascript program to check a number is Armstrong or not


let number = 1634

let new_number = String(number)

let n = 0

let sum = 0

while(n < new_number.length) {

    value = Math.pow(Number(new_number[n]), new_number.length) 
    
    sum = sum + value

    n = n + 1
}

if (sum === number) {
    console.log("Armstrong Number")
}
else {
    console.log("Not an Armstrong Number")
}
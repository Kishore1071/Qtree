// Write a Javascript program to sum the current and previous number for selected number range

let previous_number = 0

for (let current_number = 1; current_number <= 10; current_number++) {
    console.log(current_number + previous_number);

    previous_number = current_number
}
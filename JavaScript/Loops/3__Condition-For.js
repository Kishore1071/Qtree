// Basic loop

for (let i = 0; i < 5; i++) {
    console.log("Iteration #" + i);
}


// Infinite Loop
for (let i = 0; i < 5; i--) {
    console.log("This is an infinite loop!");
}


// Nesting of for loop

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}


// Break and Continue statement is used stop a loop and skip a iteration of loop

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Exit the loop when i is 3
    }
    if (i === 1) {
        continue; // Skip iteration when i is 1
    }
    console.log("Iteration #" + i);
}


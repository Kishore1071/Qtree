let fruits = ["pineapple", "banana", "cherry", "dates"];

// Simple Loop

for (let fruit of fruits) {
    console.log(fruit)
}


// Loop Condition

for (let fruit of fruits) {
    
    if (fruit.length <= 5) {
        console.log(fruit)
    }
}

// Skipping a iteration

for (let fruit of fruits) {
    
    if (fruit.length <= 5) {
        continue
    }
    else {
        console.log(fruit)
    }
}

// Breaking a iteration

for (let fruit of fruits) {
    
    if (fruit.length <= 5) {
        break
    }
    else {
        console.log(fruit)
    }
}
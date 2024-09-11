const definition = "If statements are condtional statement in javascript which is used to run a block of code when a condition is is satisfied and it also allow us to test more than one possibility"


// Basic

let age = 25;

if (age >= 18) {
    console.log("You are an adult.");
}


let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside.");
} else {
    console.log("It's not too hot.");
}


// Multiple Condition

let score = 85;

if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else if (score >= 70) {
    console.log("C grade");
} else {
    console.log("D grade");
}


// Nesting

let x = 10;
let y = 5;

if (x > 0) {
    if (y > 0) {
        console.log("Both x and y are positive.");
    } else {
        console.log("x is positive, but y is not.");
    }
} else {
    console.log("x is not positive.");
}


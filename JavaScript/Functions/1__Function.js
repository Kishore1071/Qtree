const definition = "a function is a reusable block of code that performs a specific task or set of tasks. Functions are used reduce code repeataion and make the codes in to single callable functions"

// Basic Function

function ConsoleData() {
    console.log("Something")
}

ConsoleData();


// Function with Return

function ReturnData() {
    
    let a = 10
    let b = 15
    let c = a + b
    return c;
}

let d = ReturnData();


// Function with Parameters and Arguments

function Addition(number1, number2) {
    return number1 + number2;
}

Addition(10, 5)


// Function can have local variable

function Double(number) {
    return number * 2
}

Double(10)


// Function with default value to parameters

function Subtraction(a, b, c=4, d=6) {
    return a * b * c * d
}

Subtraction(2, 4)
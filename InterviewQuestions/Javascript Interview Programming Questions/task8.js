// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms


const FibonacciSeries = count => {

    let number1 = 0
    let number2 = 1

    let iteration = 0

    while (iteration < count) {

        if (iteration === 0) {

            console.log(number1)
            console.log(number2)
            iteration = iteration + 2
        }
        else {
            
            sum = number1 + number2
            console.log(sum)

            number1 = number2
            number2 = sum

            iteration = iteration + 1
        }
    }
}

FibonacciSeries(10)
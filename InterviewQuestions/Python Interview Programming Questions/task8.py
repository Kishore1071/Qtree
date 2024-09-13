# Write a Python function that returns the Fibonacci sequence up to a given number of terms


def FibonacciSeries(count):

    number1 = 0
    number2 = 1

    iteration = 0

    while iteration < count:

        if iteration == 0:

            print(number1)
            print(number2)

            iteration = iteration + 2
        
        else:

            total = number1 + number2

            print(total)

            number1 = number2
            number2 = total

            iteration = iteration + 1

FibonacciSeries(10)
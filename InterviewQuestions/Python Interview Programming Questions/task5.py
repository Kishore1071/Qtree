# Write a Python program to calculate the factorial of a given number


def Factorial(number):

    if (number == 0) or (number == 1): return 1

    return number * Factorial(number - 1)

print(Factorial(10))
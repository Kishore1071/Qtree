# Write a Python function that takes an array of numbers and returns a new array with only the even numbers

# Method 1: Using BuiltIns

def EvenNumbers1(numberarray):

    return [x for x in numberarray if x % 2 == 0]

result1 = EvenNumbers1([4,34,65,33,546,7])

print(result1)


# Method 2: Manual

def EvenNumbers2(numberarray):

    even_numbers = []

    for x in numberarray:

        if x % 2 == 0:

            even_numbers.append(x)

result2 = EvenNumbers2([4,34,65,33,546,7])

print(result2)
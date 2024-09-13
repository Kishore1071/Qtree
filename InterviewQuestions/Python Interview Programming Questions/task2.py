# Write a Python program to find the maximum number in an list


# Method 1: Using BuiltIns

number_array1 = [43,65,2,7,3,78]

maximum_number1 = max(number_array1)

print(maximum_number1)


# Method 2: Manual

number_array2 = [54,65,2,7,3,34]

maximum_number2 = 0

for x in number_array2:

    if x > maximum_number2: maximum_number2 = x

print(maximum_number2)
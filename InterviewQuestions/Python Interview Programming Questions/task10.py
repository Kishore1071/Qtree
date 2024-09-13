# Write a Python program to check a number is Armstrong or not

number = 153

string_number = str(number)

total = 0

for a in string_number:

    value = str(string_number) ** len(a)

    total = total + value

if number == total:

    print(f"The number ${number} is Armstrong number")

else:

    print(f"The number  ${number} is not Armstrong number")
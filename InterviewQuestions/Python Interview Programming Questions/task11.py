# Write a Python program to sum the current and previous number for selected number range

previous_number = 0

for current_number in range(1, 11):

    print(current_number + previous_number)

    previous_number = current_number
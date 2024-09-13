# Write a Python program to sort the list of numbers

number_list = [23,134,42,43,2,56,7,34,2,34,5,67,6,56,67,456,87,798,862]

sorted_list = []

while len(number_list) > 0:

    minimum_number = min(number_list)

    min_number_index = number_list.index(minimum_number)

    number_list.pop(min_number_index)

    sorted_list.append(minimum_number)

print(sorted_list)

# Write a Python program to creat an list with the largest element in each value of two dimensional list

two_d_list = [
    [34,45,7,354,67,54,57,9],
    [46,879,3,546,92,65,81,86],
    [67,69,223,94,702,39,27,61]
]

list_of_max_values = []

for x in two_d_list: list_of_max_values.append(max(x))

print(list_of_max_values)
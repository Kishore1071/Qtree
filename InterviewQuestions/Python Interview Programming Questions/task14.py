# Write a Python program to add 20 unique four digit numbers to an array

import random

number_array = []

while len(number_array) < 20:

    random_number = str(random.randint(1000, 9999))

    print(random_number)

    if len(random_number) == 4:

        match_found = False

        for a in number_array:

            if str(a) == random_number:

                match_found = True

        if not match_found:

            number_array.append(int(random_number))
            
print(number_array)
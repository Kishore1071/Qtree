# Write a Python program to given an array contains prime numbers from 0 to 100

prime_numbers = []

for x in range(0, 101):

    if (x == 0) or (x == 1): continue

    else:

        is_prime = True

        for y in range(2, x): 

            if (x % y == 0): is_prime = False

        if is_prime == True: prime_numbers.append(x)


print(prime_numbers)
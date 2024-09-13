# Write a Python program to generate password of eight character

import random

charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
password = ""
required_length = 8

for i in range(required_length):
    random_index = random.randint(0, len(charset) - 1)
    password = password + charset[random_index]

print(password)
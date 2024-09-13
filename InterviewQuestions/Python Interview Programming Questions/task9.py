# Write a Python program to convert a string to title case (capitalize the first letter of each word)


# Method 1: Using BuiltIns

import re

def TitleCase1(sentence):

    return re.sub(r'\b\w', lambda l: l.group().upper(), sentence)

print(TitleCase1("this is the sample text"))


# Method 2: Manual

def TitleCase2(sentence):

    sentence_to_array = sentence.split(' ')

    capitalized_array = [x[0].upper() + x[1:] for x in sentence_to_array]

    sentence = ' '.join(capitalized_array)

    return sentence


print(TitleCase2("this is the sample text"))
# Write a Python function to check if a given string is a palindrome


# Method 1: Using BuiltIns

def Palindrome1(word):

    return "This is a palindrome" if word == word[::-1] else "This is not a palindrome"

result1 = Palindrome1("lion")

print(result1)


# Method 2: Manual


def Palindrome2(word):

    new_string = ''

    for x in word: new_string = x + new_string

    return "This is a palindrome" if word == new_string else "This is not a palindrome"

result2 = Palindrome2("reviver")

print(result2)


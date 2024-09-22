import random

value = random.random()

value_range = random.uniform(1, 3)

integer_value_range = random.randint(10, 100)

random_range = random.randrange(1000, 9999, 10)

fruits = ["Apple", "Orange", "PineApple", "Banana"]

random_single_choice = random.choice(fruits)
random_multi_choice = random.choices(fruits, k=2)


print(random_choice)
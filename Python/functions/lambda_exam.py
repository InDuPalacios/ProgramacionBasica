# ------------------ LAMBDA FUNCTIONS & FUNCTIONAL TOOLS ------------------

# Simple lambda to add two numbers
add = lambda a, b: a + b
print(add(10, 4))  # Output: 14

# Simple lambda to multiply two numbers
multiply = lambda a, b: a * b
print(multiply(80, 5))  # Output: 400

# Square each number from 0 to 10 using map + lambda
numbers = range(11)
squared_numbers = list(map(lambda x: x**2, numbers))
print("Squares:", squared_numbers)

# Filter even numbers using filter + lambda
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print("Even numbers:", even_numbers)

# Sum all numbers using reduce + lambda
from functools import reduce
sum_total = reduce(lambda a, b: a + b, numbers)
print("Total sum:", sum_total)

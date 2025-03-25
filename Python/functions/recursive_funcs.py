# -------------------- RECURSIVE FUNCTIONS --------------------

# Factorial function using recursion
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

# Example: factorial of 30
print("Factorial of 30:", factorial(30))

# Fibonacci sequence using recursion
def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

# Example: fibonacci of 0
number = 0
print("Fibonacci of 0:", fibonacci(number))

# Example: fibonacci of 8
print("Fibonacci of 8:", fibonacci(8))  # Output: 21
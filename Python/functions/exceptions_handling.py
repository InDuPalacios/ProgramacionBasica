# -------------------- ERRORS AND EXCEPTIONS --------------------

# Common exceptions in Python:
# SyntaxError → invalid Python code (can't be caught with try/except)
# TypeError → wrong type used (e.g. adding int + string)
# ZeroDivisionError → dividing by zero

# Handling exceptions with try-except
try:
    divisor = int(input("Enter a divisor: "))
    result = 100 / divisor
    print("Result:", result)
except ZeroDivisionError as e:
    print("Error: Divisor cannot be 0")
    print("Exception message:", e)
except ValueError as e:
    print("Error: Please enter a valid number")
    print("Exception message:", e)

# -------------------- EXCEPTION HIERARCHY --------------------

# Print all built-in exception subclasses in Python
def print_exception_hierarchy(exception_class, indent=0):
    print(' ' * indent + exception_class.__name__)
    for subclass in exception_class.__subclasses__():
        print_exception_hierarchy(subclass, indent + 4)

# Start from base Exception class
print_exception_hierarchy(Exception)

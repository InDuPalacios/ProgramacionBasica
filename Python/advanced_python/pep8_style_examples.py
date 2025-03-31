# ------- Without PEP8 style --------

numbers = [1, 2, 3, 4, 5]

squares = []

for number in numbers:
    square = number ** 2
    squares.append(square)

print(squares)


# ------- With PEP8 style --------

# Using list comprehension and removing unnecessary spaces
squares = [x ** 2 for x in numbers]
print(squares)



# ------- Class example following PEP8 naming conventions --------

class Calculator:
    def add_numbers(self, first_number, second_number):
        result = first_number + second_number
        return result


calc = Calculator()
print(calc.add_numbers(3, 5))



# ------- Using docstrings (PEP8) --------
# Docstrings are used to describe what a function or method does.
# The first line should be a short summary.
# Then we describe the parameters and the return value.

def calculate_average(numbers):
    """
    Calculate the average of a list of numbers.

    Parameters:
        numbers (list): A list of integers or floats.

    Returns:
        float: The average value of the numbers in the list.
    """
    return sum(numbers) / len(numbers)


# A simple example using the function
print(calculate_average([1, 2, 3, 4, 5]))

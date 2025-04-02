# Function with type and value validation
def divide(a: int, b: int) -> float:
    """
    Divides two integers and returns the result as a float.

    Parameters:
        a (int): Numerator
        b (int): Denominator

    Returns:
        float: Result of the division

    Raises:
        TypeError: If either argument is not an integer.
        ValueError: If attempting to divide by zero.
    """
    # Validate that both arguments are integers
    if not isinstance(a, int) or not isinstance(b, int):
        raise TypeError("Both parameters must be integers.")

    # Validate that the denominator is not zero
    if b == 0:
        raise ValueError("The divisor cannot be zero.")

    return a / b


# Example 1: Type error
try:
    res = divide(10, '2')  # Triggers TypeError
    print(res)
except TypeError as e:
    print(f"Error: {e}")

# Example 2: Division by zero
try:
    res = divide(10, 0)  # Triggers ValueError
    print(res)
except ValueError as e:
    print(f"Error: {e}")

# Example 3: Valid division
try:
    res = divide(10, 2)  # Successful division
    print(res)
except (ValueError, TypeError) as e:
    print(f"Error: {e}")

def sumar(a, b):
    """Returns the sum of a and b."""
    return a + b

def restar(a, b):
    """Returns the difference between a and b."""
    return a - b

def multiplicar(a, b):
    """Returns the product of a and b."""
    return a * b

def dividir(a, b):
    """Returns the division of a by b. Raises error if b is zero."""
    if b == 0:
        raise ValueError("The divisor cannot be zero.")
    return a / b


# This block only runs if the script is executed directly,
# not when it is imported as a module.
if __name__ == "__main__":
    print("Operations")

    res1 = sumar(3, 4)
    print(f"Sum: {res1}")

    res2 = dividir(10, 7)
    print(f"Division: {res2}")

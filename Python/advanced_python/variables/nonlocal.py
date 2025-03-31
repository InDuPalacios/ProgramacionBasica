# Example using nonlocal keyword

def outer_function():
    x = 'enclosing'  # Enclosing variable

    # Inner function modifies the enclosing variable
    def inner_function():
        nonlocal x  # Refers to the variable in the enclosing scope
        x = 'modified'
        print(f'Value inside inner_function: {x}')

    inner_function()
    print(f'Value inside outer_function: {x}')


# Call the function
outer_function()

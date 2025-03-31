x = 100

# ----- Local scope: variable inside the function
def local_function():
    x = 10  # Local variable (different from the global one)
    print(f'The value of the local variable is {x}')

# ----- Accessing the global variable
def show_global():
    print(f'The value of the global variable is {x}')

print(x)
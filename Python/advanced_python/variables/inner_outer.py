x = 'global'  # Global variable

# Outer function (enclosing scope)
def outer_function():
    x = 'enclosing'  # Enclosing variable

    # Inner function (local scope)
    def inner_function():
        x = 'local'
        print(x)

    inner_function()
    print(x)

# Function calls
outer_function()
print(x)

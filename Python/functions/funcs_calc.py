# This function greets a user
# last_name has a default value if not provided
def greet(name, last_name="not registration"):
    print("Hola", name, last_name)

# Function calls
greet("Indu", "Durán")      
greet("Juani")     

# Basic Math Functions
def add(a,b):
    return a + b

def substract(a,b):
    return a - b

def multiply(a,b):
    return a * b

def divide(a,b):
    return a / b

# -------------------- SIMPLE CALCULATOR --------------------

# This calculator loops until user chooses to exit
def calculator():
    while True:
        print("\n1. Addition")
        print("2. Subtraction")
        print("3. Multiplication")
        print("4. Division")
        print("5. Exit")

        # Ask user for operation
        try:
            option = int(input("Enter your option (1, 2, 3, 4, 5): "))
        except ValueError:
            print("Please enter a valid number.")
            continue

        # Exit condition
        if option == 5:
            print("Exiting the calculator...")
            break
        
        # Valid options for math operations
        if option in [1, 2, 3, 4]:
            try:
                num1 = float(input("Enter the first number: "))
                num2 = float(input("Enter the second number: "))
            except ValueError:
                print("Invalid input. Only numbers are allowed.")
                continue

            # Perform the chosen operation
            if option == 1:
                print("You chose: Addition")
                print("The result is:", add(num1, num2))
            elif option == 2:
                print("You chose: Subtraction")
                print("The result is:", substract(num1, num2))
            elif option == 3:
                print("You chose: Multiplication")
                print("The result is:", multiply(num1, num2))
            elif option == 4:
                print("You chose: Division")
                print("The result is:", divide(num1, num2))
        else:
            print("Invalid option, please try again.")

# Run the calculator
calculator()

# Loops and Iteration Control

# Basic for loop through a list
numbers = [1,2,3,4,5,6]
for i in numbers:
    print("Aqui i es igual a:", i + 1)

for i in range(10):
    print(i)

# Looping through a list of fruits
fruits = ["Apple", "Pera", "Grapes", "Orange", "Tomate"]
for fruit in fruits:
    print(fruit)
    if fruit == "Orange":
        print("Naranja encontrada")


# While loop with break abd cotinue
x = 0
while x < 5:
    if x == 3:
        break  # Stops the loop when x == 3
    print(x)
    x += 1

numbers = [1,2,3,4,5,6]
for i in numbers:
    if i ==3:
        continue # Skips printing when i == 3
    print("Aqui i es igual a:", i)


# Example of while loop with else
count = 0
while count < 3:
    print("Counting:", count)
    count += 1
else:
    print("Done counting")  # Runs when the loop ends normally


        
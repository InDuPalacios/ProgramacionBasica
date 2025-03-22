# 📌 input() always returns a string, so casting is used  
# to handle the data properly  

name = input("Enter your name: ")  
age = int(input("Enter your age: ")) # Convert input to an integer

print(name)  
print(age)  


# 📌 Creating Lists
to_do = ["Check into the hotel",
         "Go for lunch",
         "Visit a museum",
         "Return to the hotel"]
print("To-Do List:", to_do)

# Mixed-type list (Numbers and Strings)
number = [1, 2, 3, 4, "five"]
print("Type of numbers list:", type(number))  # Checking the type of the list

# A mixed list with different data types
mixed = ["one", 2, 3.14, True, [1, 2, 3]]

print("\nMixed List:", mixed)
print("Length of the list:", len(mixed))  # Get the length of the list

# Accessing elements in the list
print("First element:", mixed[0])  # First element (index 0)
print("Second element:", mixed[1])  # Second element (index 1)
print("Last element:", mixed[-1])  # Last element (negative index)

# Working with Strings (strings behave like lists of characters)
string = "Hello World"
print("\nString example:", string)
print("First letter:", string[0])  
print("Second letter:", string[1])  
print("Last letter:", string[-1])  

# Slicing Lists (Getting sublists)
print("\nList Slicing Examples:")
print("Elements from index 2 to 5:", mixed[2:5])  # From index 2 to 4
print("First 2 elements:", mixed[:2])  # From start to index 1
print("Elements from index 2 to the end:", mixed[2:])  # From index 2 to the end


# Metodos/Funciones propias de las listas
numbers = [3, 1, 4, 1, 5]

numbers.append(9)  # Add an element to the end
numbers.insert(2, 2)  # Insert a number at index 2
numbers.remove(1)  # Remove the first occurrence of 1
last = numbers.pop()  # Extract the last element
position = numbers.index(4)  # Find the position of 4
count = numbers.count(1)  # Count how many times 1 appears
numbers.sort()  # Sort the list in ascending order
numbers.reverse()  # Reverse the order
numbers_copy = numbers.copy()  # Create a copy of the list
numbers.extend([8, 6, 7])  # Add more numbers
# del removes an element at a specific index
del numbers[2]  # Delete the element at index 2

print(numbers)
print("Maximum", max(numbers))
print("Maximum", min(numbers))
print(numbers.index(5))

numbers.clear()  # Empty the list

print("Last extracted element:", last)
print("Position of number 4:", position)
print("Count of number 1:", count)
print("Sorted and reversed list:", numbers_copy)
print("Final empty list:", numbers)


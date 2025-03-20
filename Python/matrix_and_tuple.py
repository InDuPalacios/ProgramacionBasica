matrix = [[1,2,3],
          [4,5,6],
          [7,8,9]]
print(matrix[0])
print(matrix[2][1])

numbers = (1,2,3,4,5)
print(numbers)
print(type(numbers))

# 📌 Lists and Matrices

# A 3x3 matrix (list of lists)
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

print(matrix[0])      # Prints the first row: [1, 2, 3]
print(matrix[2][1])   # Access row index 2, column index 1 → Output: 8

# 📌 Tuples (Immutable Lists)

numbers = (1, 2, 3, 4, 5)  # Tuple example
print(numbers)      # Prints the entire tuple
print(type(numbers))  # Verifies the data type (tuple)

# 📌 Lists vs. Tuples
# - Lists ([]) are mutable (can be changed)
# - Tuples (()) are immutable (cannot be changed)

# Example of modifying a list
list_example = [10, 20, 30]
list_example[0] = 99  # ✅ Allowed
print(list_example)

# Example of modifying a tuple (will cause an error)
# numbers[0] = 99  # ❌ TypeError: 'tuple' object does not support item assignment

# 📌 Tuple unpacking
a, b, c, d, e = numbers
print(a, b, c)  # Output: 1 2 3

# 📌 Converting between lists and tuples
numbers_list = list(numbers)  # Convert tuple → list
numbers_tuple = tuple(list_example)  # Convert list → tuple

print(numbers_list)
print(numbers_tuple)

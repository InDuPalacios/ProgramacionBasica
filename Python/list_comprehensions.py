# 📌 List Comprehensions

squares = [x**2 for x in range(1, 11)]
print("Squares:", squares)

# Convert Celsius temperatures to Fahrenheit
celsius = [0, 10, 20, 30, 40]
fahrenheit = [(temp * 9/5) + 32 for temp in celsius]  # Corrected formula
print("Temperature in F:", fahrenheit)

# 📌 Filter even numbers from 1 to 20
evens = [x for x in range(1, 21) if x % 2 == 0]
print("Even numbers:", evens)

# 📌 Matrix Transposition using List Comprehension
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Transpose the matrix (rows → columns)
transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
print("Original Matrix:", matrix)
print("Transposed Matrix:", transposed)

# 📌 Matrix Transposition using Nested Loops (Alternative method)
transposed = []  # Empty list to store the transposed matrix
for i in range(len(matrix[0])):  # Loop through columns
    transposed_row = []
    for row in matrix:  # Loop through rows
        transposed_row.append(row[i])  # Append elements column-wise
    transposed.append(transposed_row)  # Add row to transposed matrix

print("Transposed Matrix (using loops):", transposed)

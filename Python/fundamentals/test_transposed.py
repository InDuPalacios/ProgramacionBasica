# matrix = [
#     [1, 2, 3, 4],
#     [4, 5, 6],
#     [7, 8, 9, 6, 7]
# ]
# print(len(matrix[0]))
# print(len(matrix[1]))
# print(len(matrix[2]))

# mi_arreglo1 = [1, 2, 3, 4]
# mi_arreglo2 = [4, 5, 6]
# mi_arreglo3 = [7, 8, 9, 6, 7]

# mi_arreglo_que_es_una_matrix = [
#     mi_arreglo1,
#     mi_arreglo2,
#     mi_arreglo3
# ]

# print(mi_arreglo_que_es_una_matrix[0])
# print(len(mi_arreglo_que_es_una_matrix[0]))

# start_on = 2

# for i in range(start_on, 5):
#     print(f"hola {i}")

# Original matrix
matrix = [
    ["guargo", "espadas", "cerditoespectral"],
    ["bambi", "esqueleto_skin", "pastel"],
    ["chaqueta", "zapatos", "capa"]
]

# Step 1: Print the original matrix
print("🔹 Original Matrix:")
for row in matrix:
    print(row)

input("\nPress Enter to start transposing...")

# Step 2: Create an empty list to store the transposed matrix
transposed = []

# Step 3: Loop through the columns (i represents the column index)
for i in range(len(matrix[0])):  # The number of columns in the original matrix
    print(f"\n▶ Processing column {i}:")
    
    transposed_row = []  # Create a new row for the transposed matrix
    
    # Step 4: Loop through each row to get the i-th element
    for row_index, row in enumerate(matrix):
        print(f"  - Extracting element at row {row_index}, column {i}: {row[i]}")
        transposed_row.append(row[i])  # Append the i-th column element
    
    # Step 5: Append the new row to the transposed matrix
    transposed.append(transposed_row)
    
    print(f"  ✅ Transposed row {i}:", transposed_row)
    input("Press Enter to continue...")  # Pause before processing the next column

# Step 6: Print the transposed matrix
print("\n🔹 Transposed Matrix:")
for row in transposed:
    print(row)

print("\n✅ Matrix transposition completed!")

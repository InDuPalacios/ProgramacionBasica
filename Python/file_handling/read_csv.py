import csv

# ----- Read a CSV file
"""
with open('products.csv', mode='r') as file:
    csv_reader = csv.DictReader(file)
    for row in csv_reader:
        print(row)
"""

# ----- Show specific columns
with open('products.csv', mode ='r') as file:
    csv_reader = csv.DictReader(file)
    for row in csv_reader:
        print(f"Product: {row['name']}, Price: {row['price']}")

# ----- Add a new product to the CSV
new_product = {
    'name': 'Cargador Inalámbrico',
    'price': '75',
    'quantity': 100,
    'brand': 'MarcaX',
    'category': 'Accesories',
    'entry_date': '2025-03-27'
}

# Append the new product to the file
with open('products.csv', mode='a', newline='') as file:
    file.write('\n')
    cvs_writer = csv.DictWriter(file, fieldnames = new_product.keys())
    cvs_writer.writerow(new_product)
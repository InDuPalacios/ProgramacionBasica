import json


# ----- File path
file_path = 'products.json'

new_product = {
    'name': 'Cargador Inalambrico',
    'price': '75',
    'quantity': 100,
    'brand': 'MarcaX',
    'category': 'Accesories',
    'entry_date': '2025-03-27'
}

# ----- Load existing products from JSON file
with open(file_path, mode='r') as file:
    products = json.load(file)

# ----- Add new product to the list
products.append(new_product)

# ----- Save updated list back to the JSON file
with open(file_path, mode='w') as file:
    json.dump(products, file, indent=4)
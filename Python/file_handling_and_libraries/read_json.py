import json


# ----- Read JSON file
with open('products.json', mode='r') as file:
    products = json.load(file)

# ----- Display product name and price
for product in products:
    #print(product)
    print(f"Product: {product['name']}, Price:{product['price']}")


import csv


new_product = {
    'name': 'Cargador Inalámbrico',
    'price': '75',
    'quantity': 100,
    'brand': 'MarcaX',
    'category': 'Accesories',
    'entry_date': '2025-03-27'
}

with open('products.csv', mode='a', newline='') as file:
    file.write('\n')
    cvs_writer = csv.DictWriter(file, fieldnames = new_product.keys())
    cvs_writer.writerow(new_product)
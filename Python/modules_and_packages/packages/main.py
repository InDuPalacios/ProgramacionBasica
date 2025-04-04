# Import functions from modules inside the ecommerce package
from ecommerce.inventory import add_product, remove_product
from ecommerce.sales import process_sale

# Simulate inventory operations and a sale
add_product('Laptop', 10)
remove_product('Laptop')
process_sale('Laptop', 2)
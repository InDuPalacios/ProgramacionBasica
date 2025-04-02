from collections import defaultdict

# Function to count occurrences of products using defaultdict
def count_products(orders: list[str]) -> defaultdict[str, int]:
    """
    Counts how many times each product appears in a list using defaultdict.

    Parameters:
        orders (list[str]): A list of product names.

    Returns:
        defaultdict[str, int]: A dictionary with product names as keys and counts as values.
    """
    # Create a dictionary with default value of 0
    product_count = defaultdict(int)
    for product in orders:
        product_count[product] += 1
    return product_count


# Example usage
orders = ['laptop', 'smartphone', 'laptop', 'tablet']
count = count_products(orders)
print(count)

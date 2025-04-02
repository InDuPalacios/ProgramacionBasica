from collections import Counter

# Function to count product sales using Counter
def count_sales(products: list[str]) -> Counter[str]:
    """
    Counts how many times each product was sold using the Counter class.

    Parameters:
        products (list[str]): A list of sold product names.

    Returns:
        Counter[str]: A dictionary-like object with product counts.
    """
    # Use Counter to count how many products of each type were sold
    return Counter(products)


# Example usage
sales = ["laptop", "smartphone", "smartphone", "laptop", "tablet"]
result = count_sales(sales)
print(result)  # Output: Counter({'laptop': 2, 'smartphone': 2, 'tablet': 1})

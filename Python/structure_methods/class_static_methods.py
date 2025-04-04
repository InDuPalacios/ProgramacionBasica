class Order:
    @staticmethod
    def calculate_tax(amount, tax_rate):
        """
        Static method to calculate tax based on an amount and a given rate.

        - Does not access or modify class or instance data.
        - Pure utility method: logically belongs to the class but is independent of it.
        """
        return amount * (tax_rate / 100)


# Using the static method without creating an instance
print(Order.calculate_tax(1000, 18))  # Output: 180.0

# -----------------------------

class Order:
    # Class-level attribute shared by all instances
    global_discount = 10

    def __init__(self, amount):
        self.amount = amount

    @classmethod
    def update_global_discount(cls, new_discount):
        """
        Class method to update the global discount.
        
        - Receives the class itself as 'cls'.
        - Can modify class-level attributes.
        """
        cls.global_discount = new_discount


# Updating the class attribute using the class method
Order.update_global_discount(15)
print(Order.global_discount)  # Output: 15

        
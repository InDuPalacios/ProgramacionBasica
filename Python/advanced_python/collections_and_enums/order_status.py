from enum import Enum

# Enum to represent order status
class OrderStatus(Enum):
    PENDING = 1  # Pending
    SHIPPED = 2  # Shipped
    DELIVERED = 3  # Delivered


# Function to check the order status and return a message
def check_order_status(status: OrderStatus) -> str:
    """
    Checks the order status and returns a descriptive message.

    Parameters:
        status (OrderStatus): The current status of the order.

    Returns:
        str: A message describing the status.
    """
    if status == OrderStatus.PENDING:
        return "Order is still pending."
    elif status == OrderStatus.SHIPPED:
        return "Order has been shipped."
    elif status == OrderStatus.DELIVERED:
        return "Order has been delivered."


# Example usage
print(check_order_status(OrderStatus.DELIVERED))

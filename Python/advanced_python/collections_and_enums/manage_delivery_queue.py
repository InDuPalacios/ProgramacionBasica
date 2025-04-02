from collections import deque

# Function to simulate a delivery queue using deque
def manage_delivery_queue() -> deque[str]:
    """
    Creates and manages a delivery queue using deque.

    Operations performed:
    - Append orders to both ends of the queue.
    - Remove orders from both ends of the queue.

    Returns:
        deque[str]: The updated delivery queue.
    """
    # Create a queue to manage product deliveries
    delivery_queue = deque(["order_1", "order_2", "order_3"])

    delivery_queue.append("order_4")  # Add to the end
    delivery_queue.appendleft("order_0")  # Add to the beginning
    delivery_queue.pop()  # Remove from the end
    delivery_queue.popleft()  # Remove from the beginning

    return delivery_queue


# Example usage
queue = manage_delivery_queue()
print(queue)

# Decorator to log a transaction around a function call
def log_transaction(func):
    """
    Decorator that logs the start and end of a transaction.

    Parameters:
        func (function): The function to be wrapped.

    Returns:
        function: A wrapper that adds logging before and after the function call.
    """
    def wrapper():
        print("1 Logging the transaction...")
        func()
        print("3 Logging finished.")
    return wrapper


# Function to simulate a payment process
@log_transaction
def process_payment():
    """
    Simulates processing a payment.
    """
    print("2 Processing payment...")


# Execute the decorated function
process_payment()

import asyncio
import time
import random
import multiprocessing

# Asynchronous function to check inventory availability
async def check_inventory(item):
    print(f'Checking inventory for {item}...')
    await asyncio.sleep(random.randint(3, 6))
    print(f'Inventory checked for {item}')
    return random.choice([True, False])

# Asynchronous function to process payment
async def process_payment(order_id):
    print(f'Processing payment for order {order_id}...')
    await asyncio.sleep(random.randint(3, 6))
    print(f'Payment processed for order {order_id}')
    return True

# CPU-intensive function to calculate order total
def calculate_total(items):
    print(f'Calculating total cost for {len(items)} items...')
    time.sleep(5)  # Simulate CPU work
    total = sum(item['price'] for item in items)
    print(f'Total cost calculated: {total}')
    return total

# Orchestrates the full order processing
async def process_order(order_id, items):
    print(f'Starting processing for order {order_id}...')

    # Check inventory for each item concurrently
    inventory_checks = [check_inventory(item['name']) for item in items]
    inventory_results = await asyncio.gather(*inventory_checks)

    if not all(inventory_results):
        print(f'Order {order_id} cancelled: Product unavailable')
        return

    # Calculate total using a separate process
    with multiprocessing.Pool() as pool:
        total = pool.apply(calculate_total, (items,))

    # Process payment asynchronously
    payment_result = await process_payment(order_id)

    if payment_result:
        print(f'Order {order_id} completed successfully. Total: {total}')
    else:
        print(f'Payment failed for order {order_id}')

# Main coroutine that processes multiple orders
async def main():
    orders = [
        {'order_id': 1, 'items': [{'name': 'Laptop', 'price': 1000}, {'name': 'Mouse', 'price': 50}]},
        {'order_id': 2, 'items': [{'name': 'Keyboard', 'price': 80}, {'name': 'Monitor', 'price': 300}]},
        {'order_id': 3, 'items': [{'name': 'Smartphone', 'price': 700}, {'name': 'Case', 'price': 20}]}
    ]

    # Process all orders concurrently
    tasks = [process_order(order['order_id'], order['items']) for order in orders]
    await asyncio.gather(*tasks)

# Run the event loop
if __name__ == '__main__':
    asyncio.run(main())
import asyncio

async def process_data(data):
    """
    Simulates processing of some data asynchronously.
    Uses asyncio.sleep to mimic a non-blocking I/O operation.
    """
    print(f'Processing {data}...')
    await asyncio.sleep(10)  # Simulate a delay (non-blocking)
    print(f'{data} processed.')
    return data * 2

async def main():
    """
    Main coroutine that awaits the result of the asynchronous task.
    """
    print('Starting processing...')
    result = await process_data('archivo.txt')
    print(f'Result: {result}')

# Run the main coroutine
asyncio.run(main())

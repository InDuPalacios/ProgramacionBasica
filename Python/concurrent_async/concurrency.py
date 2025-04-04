import threading
import time

# Function that simulates processing a request
def process_request(request_id):
    print(f'Processing request {request_id}')
    time.sleep(3)
    print(f'Request {request_id} completed')

threads = []

# Create and start 3 threads
for i in range(3):
    thread = threading.Thread(target=process_request, args=(i,))
    threads.append(thread)
    thread.start()

# Wait for all threads to complete
for thread in threads:
    thread.join()  # Ensures the main program waits for all threads

print('All requests completed')

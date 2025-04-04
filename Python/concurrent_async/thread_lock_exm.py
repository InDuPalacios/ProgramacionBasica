import threading

# Shared variable
saldo = 0

# Lock to avoid race conditions
lock = threading.Lock()

def depositar(dinero):
    """
    Simulates adding money to a shared balance multiple times.
    Uses a lock to avoid race conditions when accessing the shared resource.
    """
    global saldo
    for _ in range(100000):
        # Ensure that only one thread accesses 'saldo' at a time
        with lock:
            saldo += dinero

# Create and start two threads
hilos = []
for _ in range(2):
    hilo = threading.Thread(target=depositar, args=(1,))
    hilos.append(hilo)
    hilo.start()

# Wait for both threads to complete
for hilo in hilos:
    hilo.join()

# Final result (expected: 200000)
print(f"Final balance: {saldo}")

import multiprocessing

def calcular_cuadrado(numeros, cola):
    """
    Receives a list of numbers and stores their squares in the shared queue.
    """
    for n in numeros:
        cola.put(n * n)

if __name__ == "__main__":
    numeros = [1, 2, 3, 4, 5]

    # Create a queue for inter-process communication
    cola = multiprocessing.Queue()

    # Create and start a process
    proceso = multiprocessing.Process(target=calcular_cuadrado, args=(numeros, cola))
    proceso.start()
    proceso.join()  # Wait for the process to complete

    # Retrieve and print results from the queue
    while not cola.empty():
        print(cola.get())

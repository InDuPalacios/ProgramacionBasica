import multiprocessing

def add_values(shared_list):
    """
    Adds a range of values to a shared list.
    This function is meant to be run in a separate process.
    """
    for i in range(5):
        shared_list.append(i)

if __name__ == "__main__":
    # Create a manager that allows shared data structures between processes
    with multiprocessing.Manager() as manager:
        shared_list = manager.list()  # Shared list between processes

        # Create two processes that will add values to the shared list
        process1 = multiprocessing.Process(target=add_values, args=(shared_list,))
        process2 = multiprocessing.Process(target=add_values, args=(shared_list,))

        # Start both processes
        process1.start()
        process2.start()

        # Wait for both to complete
        process1.join()
        process2.join()

        # Print the result from the shared list
        print(f"Shared list: {list(shared_list)}")
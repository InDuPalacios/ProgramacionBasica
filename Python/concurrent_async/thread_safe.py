import threading

class BankAccount:
    def __init__(self, balance):
        self.balance = balance
        self.lock = threading.RLock()  # Reentrant lock to avoid deadlocks

    def transfer(self, other_account, amount):
        """
        Transfers a certain amount to another account.
        Uses RLock to avoid deadlocks when multiple threads are involved.
        """
        with self.lock:
            self.balance -= amount
            other_account.deposit(amount)

    def deposit(self, amount):
        """
        Deposits the given amount to the account in a thread-safe way.
        """
        with self.lock:
            self.balance += amount


# Create two bank accounts
account1 = BankAccount(500)
account2 = BankAccount(300)

# Create threads that perform transfers between the accounts
thread1 = threading.Thread(target=account1.transfer, args=(account2, 200))
thread2 = threading.Thread(target=account2.transfer, args=(account1, 100))

# Start both threads
thread1.start()
thread2.start()

# Wait for both threads to finish
thread1.join()
thread2.join()

# Print final balances
print(f"Account 1 balance: {account1.balance}")
print(f"Account 2 balance: {account2.balance}")
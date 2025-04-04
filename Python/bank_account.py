class BankAccount:
    def __init__(self, owner: str, initial_balance: float = 0.0):
        """
        Initializes a bank account with an owner and an optional initial balance.
        """
        self.owner = owner
        self._balance = initial_balance  # Protected attribute
        self.__transactions = []  # Private attribute to store transaction logs

    def get_balance(self) -> float:
        """
        Returns the current balance.
        """
        return self._balance

    def deposit(self, amount: float):
        """
        Deposits money into the account.
        """
        if amount <= 0:
            raise ValueError("Deposit amount must be greater than zero.")
        self._update_balance(amount)
        self.__log_transaction(f"Deposit: +${amount:.2f}")

    def withdraw(self, amount: float):
        """
        Withdraws money from the account.
        """
        if amount > self._balance:
            raise ValueError("Insufficient funds.")
        self._update_balance(-amount)
        self.__log_transaction(f"Withdrawal: -${amount:.2f}")

    def show_transactions(self):
        """
        Displays the transaction history.
        """
        print(f"Transaction history for {self.owner}:")
        for transaction in self.__transactions:
            print("-", transaction)

    # Protected method to update the balance
    def _update_balance(self, amount: float):
        self._balance += amount

    # Private method to log a transaction (not accessible outside the class)
    def __log_transaction(self, message: str):
        self.__transactions.append(message)


# Example usage
account = BankAccount("Alice", 1000)
account.deposit(200)
account.withdraw(150)
print(f"Balance: ${account.get_balance():.2f}")
account.show_transactions()

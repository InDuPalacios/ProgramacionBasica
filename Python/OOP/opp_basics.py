# Object-Oriented Programming in Python

# ----- Person class -----
class Person:
    def __init__(self, name, age):  # constructor METHOD
        self.name = name
        self.age = age

    def greet(self):  # instance METHOD
        print(f"Hi, my name is {self.name} and I'm {self.age} years old.")

# create Person instances
person1 = Person("Juani", 12)
person2 = Person("Anibal", 34)

person1.greet()
person2.greet()


# ----- BankAccount class -----
class BankAccount:
    def __init__(self, account_holder, balance):  # constructor
        self.account_holder = account_holder
        self.balance = balance
        self.is_active = True

    def deposit(self, amount):  # deposit method
        if self.is_active:
            self.balance += amount
            print(f"Deposited {amount}. Current balance: {self.balance}")
        else:
            print("Deposit failed. Account is inactive.")

    def withdraw(self, amount):  # withdraw method
        if self.is_active:
            if amount <= self.balance:
                self.balance -= amount
                print(f"Withdrawn {amount}. Current balance: {self.balance}")
            else:
                print("Not enough balance.")
        else:
            print("Withdraw failed. Account is inactive.")

    def deactivate_account(self):  # set account inactive
        self.is_active = False
        print("Account has been deactivated.")

    def activate_account(self):  # set account active
        self.is_active = True
        print("Account has been activated.")

# create BankAccount instances
account1 = BankAccount("Ana", 500)
account2 = BankAccount("Pedro", 1000)

# calling methods
account1.deposit(200)
account2.deposit(100)
account1.deactivate_account()
account1.deposit(50)       # should fail
account1.withdraw(100)     # should fail
account1.activate_account()
account1.withdraw(300)     # should work

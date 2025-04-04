class MultiplierFactory:
    def __new__(cls, factor: int):
        """
        Called before __init__, responsible for creating the instance.
        It's used in metaprogramming when you want to customize instance creation.
        """
        print(f"Creating instance with factor {factor}")
        return super(MultiplierFactory, cls).__new__(cls)

    def __init__(self, factor: int):
        """
        Initializes the instance after it's been created by __new__.
        Sets the multiplier factor.
        """
        print(f"Initializing with factor {factor}")
        self.factor = factor

    def __call__(self, number: int) -> int:
        """
        Allows the instance to be called like a function.
        When you do instance(x), this method is executed.
        """
        return number * self.factor


# Creating an instance of the class
multiplier = MultiplierFactory(5)

# Using the instance as a function thanks to __call__
result = multiplier(10)
print(result)  # Output: 50

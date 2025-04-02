class Calculadora:
    @staticmethod
    def suma(a: int, b: int) -> int:
        """
        A static method does not access or modify class or instance state.
        It behaves like a regular function but is namespaced inside the class.
        """
        return a + b


class Counter:
    count = 0

    @classmethod
    def increment(cls):
        """
        A class method receives the class itself as the first argument (cls).
        It can modify class-level data shared by all instances.
        """
        cls.count += 1


# Using the class method to increment the shared class variable
Counter.increment()
Counter.increment()
print(Counter.count)  # Output: 2


class Circulo:
    def __init__(self, radio: float):
        self._radio = radio

    @property
    def area(self) -> float:
        """
        The @property decorator allows accessing a method like an attribute.
        This property returns the area of the circle.
        """
        return 3.1416 * self._radio ** 2

    @property
    def radio(self) -> float:
        """
        Getter method for the 'radio' property.
        Allows access to the value using 'obj.radio' instead of 'obj.get_radio()'.
        """
        return self._radio

    @radio.setter
    def radio(self, valor: float):
        """
        Setter for the 'radio' property.
        Allows setting the value using 'obj.radio = value'.
        Also includes validation logic.
        """
        if valor < 0:
            raise ValueError("Radius cannot be negative")
        self._radio = valor

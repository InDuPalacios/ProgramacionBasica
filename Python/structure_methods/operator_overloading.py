# Example 1: Overloading the + operator using __add__
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        """
        Overloads the + operator to add two vectors.
        Returns a new Vector with added components.
        """
        return Vector(self.x + other.x, self.y + other.y)

    def __repr__(self):
        """
        Returns a developer-friendly representation of the vector.
        """
        return f"Vector({self.x}, {self.y})"


# Usage
v1 = Vector(2, 3)
v2 = Vector(4, 1)
v3 = v1 + v2  # Calls __add__
print(v3)  # Output: Vector(6, 4)


# Example 2: Overloading the == operator using __eq__
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __eq__(self, other):
        """
        Overloads the == operator to compare Person objects
        based on name and age.
        """
        return self.name == other.name and self.age == other.age


# Usage
p1 = Person("Ana", 30)
p2 = Person("Ana", 30)
print(p1 == p2)  # Output: True


# Example 3: Overloading the < operator using __lt__
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __lt__(self, other):
        """
        Overloads the < operator to compare people by age.
        """
        return self.age < other.age


# Usage
p1 = Person("Ana", 25)
p2 = Person("Luis", 30)
print(p1 < p2)  # Output: True

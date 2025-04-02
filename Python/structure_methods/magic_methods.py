class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    def __str__(self) -> str:
        """User-friendly string representation (used by print)."""
        return f"Person: {self.name}, {self.age} years old"

    def __repr__(self) -> str:
        """Technical/debug representation of the object."""
        return f"Person(name='{self.name}', age={self.age})"

    def __eq__(self, other_person) -> bool:
        """Checks if two Person objects are equal based on name and age."""
        return self.name == other_person.name and self.age == other_person.age

    def __lt__(self, other_person) -> bool:
        """Checks if this person is younger than another."""
        return self.age < other_person.age

    def __add__(self, other_person):
        """Adds the ages of two Person objects."""
        return self.age + other_person.age

    def __len__(self) -> int:
        """Returns the length of the person's name."""
        return len(self.name)

    def __getitem__(self, index: int) -> str:
        """Allows indexing the person's name like a string."""
        return self.name[index]

    def __format__(self, format_spec: str) -> str:
        """Custom formatting support."""
        if format_spec == "short":
            return f"{self.name} ({self.age})"
        elif format_spec == "formal":
            return f"Name: {self.name} | Age: {self.age}"
        return str(self)  # Default fallback


# Example usage
p1 = Person("Ana", 28)
p2 = Person("Luis", 35)

# __str__
print(p1)  # Person: Ana, 28 years old

# __repr__
print(repr(p2))  # Person(name='Luis', age=35)

# __eq__
print(p1 == Person("Ana", 28))  # True

# __lt__
print(p1 < p2)  # True

# __add__
print(p1 + p2)  # 63

# __len__
print(len(p1))  # 3 (length of "Ana")

# __getitem__
print(p1[0])  # A

# __format__
print(f"{p1:short}")   # Ana (28)
print(f"{p2:formal}")  # Name: Luis | Age: 35

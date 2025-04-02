"""
This module contains examples using type annotations
for functions and classes.
"""


def add_employee_ids(id1: int, id2: int) -> int:
    """Add two employee IDs and return the result."""
    return id1 + id2


class Employee:
    """A class to represent an employee with basic info."""

    name: str
    age: int
    salary: float

    def __init__(self, name: str, age: int, salary: float):
        """Initialize employee attributes."""
        self.name = name
        self.age = age
        self.salary = salary

    def introduce(self) -> str:
        """Return a string introducing the employee."""
        return (
            f"My name is {self.name}, I am {self.age} years old, "
            f"and I earn {self.salary}."
        )


if __name__ == "__main__":
    # Function test
    print(add_employee_ids(201, 202))

    # Class test
    employee1 = Employee("Ana", 30, 2000.0)
    print(employee1.introduce())

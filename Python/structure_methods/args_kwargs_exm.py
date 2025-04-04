# Function that accepts any number of positional arguments
def sum_numbers(*args):
    """Returns the sum of all provided positional arguments."""
    return sum(args)

print(sum_numbers(1, 2, 3, 4, 5))
print(sum_numbers(1, 2))
print(sum_numbers(1, 2, 3, 4, 5, 7, 8, 9, 10))


# Function that accepts any number of keyword arguments
def print_info(**kwargs):
    """Prints all keyword arguments as key-value pairs."""
    for key, value in kwargs.items():
        print(f'{key}: {value}')

print_info(name='Carlos', age=30, city='Bogotá')
print_info(name='Carlos', age=30, city='Bogotá', country='Colombia')


# Example: Using *args and **kwargs in a class
class Employee:
    def __init__(self, name, *args, **kwargs):
        """
        - name: required
        - *args: any number of skills
        - **kwargs: other optional details
        """
        self.name = name
        self.skills = args
        self.details = kwargs

    def show_employee(self):
        """Displays employee name, skills, and other details."""
        print(f'Employee: {self.name}')
        print('Skills:', self.skills)
        print('Details:', self.details)


employee = Employee('Carlos', 'Python', 'Java', 'C++', age=30, city='Bogotá')
employee.show_employee()


# Argument unpacking with *args
def add(a, b, c):
    """Adds three numbers."""
    return a + b + c

values = (1, 2, 3)
print(add(*values))  # Output: 6


# Argument unpacking with **kwargs
def show_info(name, age):
    """Prints name and age from keyword arguments."""
    print(f"Name: {name}, Age: {age}")

data = {"name": "Ana", "age": 28}
show_info(**data)

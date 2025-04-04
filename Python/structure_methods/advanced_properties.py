class Employee:
    def __init__(self, name, salary):
        self.name = name
        self._salary = salary  # Protected attribute

    @property
    def salary(self):
        """
        Getter method for the salary.
        Allows access like an attribute (employee.salary).
        """
        return self._salary

    @salary.setter
    def salary(self, new_salary):
        """
        Setter method for salary.
        Includes validation logic to prevent negative values.
        """
        if new_salary < 0:
            raise ValueError("Salary cannot be negative")
        self._salary = new_salary

    @salary.deleter
    def salary(self):
        """
        Deleter method for salary.
        Deletes the internal _salary attribute and logs the action.
        """
        print(f"The salary of {self.name} has been deleted")
        del self._salary


# Creating an instance of Employee
employee = Employee("Ana", 5000)

# Accessing the salary using the getter
print(employee.salary)  # Output: 5000

# Setting a new salary using the setter
employee.salary = 6000
print(employee.salary)  # Output: 6000

# Uncommenting the following line would raise an error:
# employee.salary = -1000  # Raises ValueError

# Deleting the salary using the deleter
del employee.salary

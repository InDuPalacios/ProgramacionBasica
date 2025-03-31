# filter_employees.py

# Function to filter employees by minimum salary
def filter_employees_by_salary(employee_list, min_salary):
    """
    Returns a list of employee names whose salary is above the given minimum.

    Parameters:
        employee_list (list): A list of dictionaries with employee data.
        min_salary (int): The salary threshold.

    Returns:
        list: Names of employees earning more than min_salary.
    """
    filtered = []  # local variable
    for employee in employee_list:
        if employee["salary"] > min_salary:
            filtered.append(employee["name"])
    return filtered


# Global variables
employees = [
    {"name": "Ana", "age": 30, "salary": 2000},
    {"name": "Luis", "age": 25, "salary": 1500},
    {"name": "Marta", "age": 40, "salary": 3000}
]

minimum_salary = 1800

# Calling the function
result = filter_employees_by_salary(employees, minimum_salary)

print("Employees earning more than", minimum_salary, ":", result)

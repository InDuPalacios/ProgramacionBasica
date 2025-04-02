# Decorator that checks if an employee has admin access
def check_access(func):
    """
    Decorator that checks if the employee has 'admin' role.

    Parameters:
        func (function): The function to wrap.

    Returns:
        function: A wrapper that allows execution only for admin users.
    """
    def wrapper(employee):
        # Check if the employee's role is 'admin'
        if employee.get('role') == 'admin':
            return func(employee)
        else:
            print("ACCESS DENIED. Only administrators can access this action.")
    return wrapper


# Function that deletes an employee, only accessible by admins
@check_access
def delete_employee(employee):
    """
    Simulates deleting an employee.

    Parameters:
        employee (dict): A dictionary representing the employee.
    """
    print(f"Employee {employee['name']} has been deleted.")


# Example employees
admin = {'name': 'Carlos', 'role': 'admin'}
employee = {'name': 'Ana', 'role': 'employee'}

# Test the function
# delete_employee(admin)
delete_employee(employee)

# Decorator that checks if an employee has the required role
def check_access(required_role):
    """
    Decorator to check if an employee has the required role.

    Parameters:
        required_role (str): The role needed to access the function.

    Returns:
        function: A wrapper that enforces role-based access control.
    """
    def decorator(func):
        def wrapper(employee):
            # Check if the employee's role matches the required role
            if employee.get('role') == required_role:
                return func(employee)
            else:
                print(f"ACCESS DENIED. Only '{required_role}' can perform this action.")
        return wrapper
    return decorator


# Decorator to log actions performed by employees
def log_action(func):
    """
    Decorator to log the action performed by an employee.

    Parameters:
        func (function): The function to wrap.

    Returns:
        function: A wrapper that logs the action before calling the function.
    """
    def wrapper(employee):
        print(f"Logging action for employee: {employee['name']}")
        return func(employee)
    return wrapper


# Target function decorated with log and access control
@check_access('admin')
@log_action
def delete_employee(employee):
    """
    Simulates deleting an employee.
    
    Parameters:
        employee (dict): A dictionary with employee data.
    """
    print(f"Employee {employee['name']} has been deleted.")


# Example employees
admin = {'name': 'Carlos', 'role': 'admin'}
employee = {'name': 'Ana', 'role': 'employee'}

# Example calls
#delete_employee(admin)
delete_employee(employee)

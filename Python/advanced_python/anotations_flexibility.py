from typing import Optional
from typing import Union


# ----- Optional example: return value can be an int or None
def find_employee(employee_ids: list[int], employee_id: int) -> Optional[int]:
    """
    Searches for an employee ID in a list and returns the ID if found.

    Parameters:
        employee_ids (list[int]): List of employee IDs.
        employee_id (int): The ID to search for.

    Returns:
        Optional[int]: The found ID, or None if not found.
    """
    if employee_id in employee_ids:
        return employee_id
    return None


# ----- Union example: accepts int or float as input and returns float
def process_salary(salary: Union[int, float]) -> float:
    """
    Processes a salary value that may be an integer or a float, returning it as a float.

    Parameters:
        salary (Union[int, float]): A salary value (int or float).

    Returns:
        float: The salary converted to float.
    """
    return float(salary)
# 📌 Dictionaries in Python

# Example: Creating a dictionary with numbers as keys
numbers = {1: "one", 2: "two", 3: "three"}

print(numbers)       # Prints the entire dictionary
print(numbers[2])    # Accesses the value for key 2 → Output: "two"

# 📌 Dictionary structure
# { key1: value1, key2: value2, key3: value3, ... }

# Example: Dictionary with different types of keys
person = {
    "name": "Indu",
    "age": 32,
    "city": "Spain",
    "is_student": False
}

print(person["name"])
print(person["age"])

# 📌 Adding and modifying elements in a dictionary
person["email"] = "indu@example.com"  # Add a new key-value pair
person["age"] = 18  # Modify an existing key

print(person)

# 📌 Removing elements
del person["is_student"]  # Deletes a specific key-value pair
print(person)

# 📌 Dictionary Methods
print(person.keys())   # Get all keys
print(person.values()) # Get all values
print(person.items())  # Get all key-value pairs

# 📌 Looping through a dictionary
for key, value in person.items():
    print(f"{key}: {value}")

# 📌 Checking if a key exists
if "city" in person:
    print("City exists in the dictionary.")

# 📌 Using get() to avoid errors
print(person.get("phone", "Not available"))

# 📌 Clearing the dictionary
person.clear()
print("Cleared dictionary:", person)  # Output: {}

# 📌 Dictionary with nested data
student = {
    "name": "John",
    "grades": {"math": 90, "science": 85, "history": 88}
}

print(student["grades"]["math"])  # Output: 90

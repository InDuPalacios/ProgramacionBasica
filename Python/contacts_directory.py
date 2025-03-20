# 📌 Simple Contacts Dictionary

# Creating a dictionary with two contacts
contacts = {
    "Juana Pérez": {
        "phone": "312-456-7890",
        "email": "juana.perez@example.com",
        "address": "Calle 123, Ciudad de México"
    },
    "María González": {
        "phone": "315-654-3210",
        "email": "maria.gonzalez@example.com",
        "address": "Avenida Principal, Buenos Aires"
    }
}

# 📌 Printing a contact's details
print("\nJuana's phone number:", contacts["Juana Pérez"]["phone"])
print("Maria's email:", contacts["María González"]["email"])

# 📌 Adding a new contact
contacts["Fernando Ramírez"] = {
    "phone": "320-123-4567",
    "email": "Fernando.ramirez@example.com",
    "address": "Carrera 45, Bogotá"
}

print("\nFernando's phone number:", contacts["Fernando Ramírez"]["phone"])

# 📌 Removing a contact
del contacts["María González"]

# 📌 Printing the dictionary after removing María
print("\nUpdated dictionary:", contacts)

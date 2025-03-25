# -------------------- VEHICLE DEALERSHIP SYSTEM (OOP) --------------------

class Vehicle:
    def __init__(self, brand, model, price):
        # Encapsulation
        self.brand = brand
        self.model = model
        self.price = price
        self.is_available = True

    def sell(self):
        if self.is_available:
            self.is_available = False
            print(f"The vehicle {self.brand} has been sold.")
        else:
            print(f"The vehicle {self.brand} is not available.")

    # Abstraction
    def check_available(self):
        return self.is_available

    # Abstraction
    def get_price(self):
        return self.price

    def start_engine(self):
        raise NotImplementedError("This method must be implemented by the subclass.")

    def stop_engine(self):
        raise NotImplementedError("This method must be implemented by the subclass.")

# Inheritance
class Car(Vehicle):
    # Polymorphism
    def start_engine(self):
        if not self.is_available:
            return f"The car {self.brand} engine is now running."
        else:
            return f"The car {self.brand} is not available."

    def stop_engine(self):
        if self.is_available:
            return f"The car {self.brand} engine has been stopped."
        else:
            return f"The car {self.brand} is not available."

# Inheritance
class Bike(Vehicle):
    # Polymorphism
    def start_engine(self):
        if not self.is_available:
            return f"The bike {self.brand} is now running."
        else:
            return f"The bike {self.brand} is not available."

    def stop_engine(self):
        if self.is_available:
            return f"The bike {self.brand} has been stopped."
        else:
            return f"The bike {self.brand} is not available."

# Inheritance
class Truck(Vehicle):
    # Polymorphism
    def start_engine(self):
        if not self.is_available:
            return f"The truck {self.brand} engine is now running."
        else:
            return f"The truck {self.brand} is not available."

    def stop_engine(self):
        if self.is_available:
            return f"The truck {self.brand} engine has been stopped."
        else:
            return f"The truck {self.brand} is not available."

# Customer class
class Customer:
    def __init__(self, name):
        self.name = name
        self.purchased_vehicles = []

    def buy_vehicle(self, vehicle: Vehicle):
        if vehicle.check_available():
            vehicle.sell()
            self.purchased_vehicles.append(vehicle)
        else:
            print(f"Sorry, {vehicle.brand} is not available.")

    def inquire_vehicle(self, vehicle: Vehicle):
        availability = "available" if vehicle.check_available() else "not available"
        print(f"The {vehicle.brand} is {availability} and costs ${vehicle.get_price()}.")

# Dealership class
class Dealership:
    def __init__(self):
        self.inventory = []
        self.customers = []

    def add_vehicle(self, vehicle: Vehicle):
        self.inventory.append(vehicle)
        print(f"The {vehicle.brand} has been added to the inventory.")

    def register_customer(self, customer: Customer):
        self.customers.append(customer)
        print(f"The customer {customer.name} has been registered.")

    def show_available_vehicles(self):
        print("Available vehicles in the dealership:")
        for vehicle in self.inventory:
            if vehicle.check_available():
                print(f"- {vehicle.brand} ({vehicle.model}) for ${vehicle.get_price()}")

# -------------------- PROGRAM EXECUTION --------------------

# Create vehicle instances
car1 = Car("Toyota", "Corolla", 20000)
bike1 = Bike("Yamaha", "MT-07", 7000)
truck1 = Truck("Volvo", "FH16", 80000)

# Create a customer
customer1 = Customer("Carlos")

# Create dealership and add vehicles
dealership = Dealership()
dealership.add_vehicle(car1)
dealership.add_vehicle(bike1)
dealership.add_vehicle(truck1)

# Show available vehicles
dealership.show_available_vehicles()

# Customer inquires about a vehicle
customer1.inquire_vehicle(car1)

# Customer buys a vehicle
customer1.buy_vehicle(car1)

# Show updated available vehicles
dealership.show_available_vehicles()

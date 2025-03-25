# -------------------- CAR DEALERSHIP SYSTEM --------------------

class Car:
    def __init__(self, brand, model, price):
        self.brand = brand
        self.model = model
        self.price = price
        self.is_available = True

    def sell(self):
        if self.is_available:
            self.is_available = False
            print(f"The car {self.brand} {self.model} has been sold.")
        else:
            print(f"The car {self.brand} {self.model} is not available.")

    def check_availability(self):
        return self.is_available

    def get_price(self):
        return self.price


class Customer:
    def __init__(self, name):
        self.name = name
        self.cars_purchased = []

    def buy_car(self, car):
        if car.check_availability():
            car.sell()
            self.cars_purchased.append(car)
        else:
            print(f"Sorry, {car.brand} {car.model} is not available.")

    def inquire_car(self, car):
        availability = "available" if car.check_availability() else "not available"
        print(f"The car {car.brand} {car.model} is {availability} and costs {car.get_price()}.")


class Dealership:
    def __init__(self):
        self.inventory = []
        self.customers = []

    def add_car(self, car):
        self.inventory.append(car)
        print(f"The car {car.brand} {car.model} has been added to the inventory.")

    def register_customer(self, customer):
        self.customers.append(customer)
        print(f"The customer {customer.name} has been registered at the dealership.")

    def show_available_cars(self):
        print("Available cars at the dealership:")
        for car in self.inventory:
            if car.check_availability():
                print(f"- {car.brand} {car.model} for ${car.get_price()}")


# -------------------- PROGRAM EXECUTION --------------------

# Create car instances
car1 = Car("Toyota", "Corolla", 20000)
car2 = Car("Honda", "Civic", 22000)
car3 = Car("Ford", "Mustang", 35000)

# Create a customer
customer1 = Customer("Carlos")

# Create dealership and register cars and customer
dealership = Dealership()
dealership.add_car(car1)
dealership.add_car(car2)
dealership.add_car(car3)
dealership.register_customer(customer1)

# Show available cars
dealership.show_available_cars()

# Customer inquires about a car
customer1.inquire_car(car1)

# Customer buys a car
customer1.buy_car(car1)

# Show available cars again
dealership.show_available_cars()

# Try to buy the same car again
customer1.buy_car(car1)

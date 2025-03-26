# ------------------ Superclass and Single Inheritance --------------------

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print("Hello! I am a person.")

# Student inherits from Person
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)  # call constructor of Person
        self.student_id = student_id

    def greet(self):
        super().greet()  # call the greet method from Person
        print(f"Hello, my student ID is {self.student_id}.")

# create Student instance
student = Student("Juani", 12, "S123")
student.greet()


# ------------------ Multiple Inheritance ------------------------

# Base class
class LivingBeing:
    def __init__(self, name):
        self.name = name

# Person inherits from LivingBeing
class Person(LivingBeing):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age

# Student inherits from Person (and indirectly from LivingBeing)
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

    def info(self):
        print(f"My name is {self.name}, I am {self.age} years old, and my ID is {self.student_id}.")

# create Student instance and show info
student = Student("Ana", 20, "ST456")
student.info()

#---------- Customizing Object Representation with __str__ and __repr__
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name}, {self.age} años"

    def __repr__(self):
        return f"Person(name={self.name}, age={self.age})"

# Crear instancias de Person
person1 = Person("Winter", 30)
person2 = Person("Ian", 25)

# Uso de __str__
print(person1)  # Output: Alice, 30 años

# Uso de __repr__
print(repr(person1))  # Output: Person(name=Alice, age=30)

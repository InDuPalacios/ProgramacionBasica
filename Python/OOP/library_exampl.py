# -------------------- OOP: LIBRARY SYSTEM --------------------

# Book class
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.available = True  # Book is available by default

    def borrow(self):
        if self.available:
            self.available = False
            print(f"The book '{self.title}' has been borrowed.")
        else:
            print(f"The book '{self.title}' is not available.")

    def return_book(self):
        self.available = True
        print(f"The book '{self.title}' has been returned.")

# User class
class User:
    def __init__(self, name, user_id):
        self.name = name
        self.user_id = user_id
        self.borrowed_books = []  # List of borrowed books

    def borrow_book(self, book):
        if book.available:
            book.borrow()
            self.borrowed_books.append(book)
        else:
            print(f"The book '{book.title}' is not available.")

    def return_book(self, book):
        if book in self.borrowed_books:
            book.return_book()
            self.borrowed_books.remove(book)
        else:
            print(f"The book '{book.title}' is not in your borrowed list.")

# Library class
class Library:
    def __init__(self):
        self.books = []  # List of all books
        self.users = []  # List of all users

    def add_book(self, book):
        self.books.append(book)
        print(f"The book '{book.title}' has been added to the library.")

    def register_user(self, user):
        self.users.append(user)
        print(f"The user '{user.name}' has been registered.")

    def show_available_books(self):
        print("Available books:")
        for book in self.books:
            if book.available:
                print(f"'{book.title}' by {book.author}")

# -------------------- PROGRAM TEST --------------------

# Create books
book1 = Book("The Little Prince", "Antoine de Saint-Exupery")
book2 = Book("1984", "George Orwell")

# Create user
user1 = User("Carli", "001")

# Create library
library = Library()

# Add books and register user
library.add_book(book1)
library.add_book(book2)
library.register_user(user1)

# Show available books
library.show_available_books()

# Borrow a book
user1.borrow_book(book1)

# Show available books again
library.show_available_books()

# Return the book
user1.return_book(book1)

# Final available books
library.show_available_books()

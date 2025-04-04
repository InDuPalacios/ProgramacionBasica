class BaseClass:
    def __init__(self):
        # Protected variable (by convention, should not be accessed directly from outside)
        self._protected_variable = 'Protected'
        # Private variable (name mangled to prevent direct access)
        self.__private_variable = 'Private'

    def _protected_method(self):
        """This is a protected method, meant for internal use or subclasses."""
        print('This is a protected method')

    def __private_method(self):
        """This is a private method, not intended to be accessed outside the class."""
        print('This is a private method')

    def public_method(self):
        """Public method that internally calls a private method."""
        self.__private_method()


# Instance of the class
base = BaseClass()

# Accessing protected members (possible but discouraged)
# print(base._protected_variable)
# base._protected_method()

# Accessing private members directly would raise an error:
# print(base.__private_variable)         # AttributeError
# base.__private_method()                # AttributeError

# Proper access through public interface
base.public_method()

# example of iterator

my_list = [1,2,3,4]

# get the iterator
my_iter = iter(my_list)

# use iterator
print(next(my_iter))
print(next(my_iter))
print(next(my_iter))
print(next(my_iter))

# iterate over a string
text = "Hola mundo"
iter_text = iter(text)

for char in iter_text:
    print(char)

# iterator for odd numbers
limit = 10
odd_itter = iter(range(1, limit+1, 2))

for num in odd_itter:
    print(num)


# basic generator
def my_generator():
    yield 1
    yield 2
    yield 3

for value in my_generator():
    print(value)
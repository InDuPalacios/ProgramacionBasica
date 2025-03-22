# 📌 Lists are mutable and stored by reference.

a = [1, 2, 3, 4, 5]  # Create a list
b = a  # 'b' references the same list as 'a'

print("List a:", a)
print("List b (same reference):", b)

# Modifying 'a' also affects 'b'
del a[0]  # Remove first element

print("Memory address of a:", id(a))
print("Memory address of b:", id(b))  # Same as 'a'

# 📌 Using slicing ([:]) creates a new independent copy.
c = a[:]  # 'c' is a copy with a different reference

print("Memory address of a:", id(a))
print("Memory address of b:", id(b))
print("Memory address of c (new copy):", id(c))  # Different from 'a' and 'b'

# Changing 'a' affects 'b' but not 'c'
a.append(6)

print("List a after modification:", a)
print("List b (same as a):", b)
print("List c (unchanged):", c)

# 📌 Summary:
# - 'b = a' makes 'b' a reference, not a copy.
# - 'c = a[:]' creates a separate list.
# - Changes to 'a' affect 'b' but not 'c'.

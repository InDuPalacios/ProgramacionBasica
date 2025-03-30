import random

# ----- Generate a random number between 1 and 10
random_number = random.randint(1, 10)
print("Random number:", random_number)

# ----- Choose a random color from the list
colors = ["rojo", "azul", "verde"]
random_color = random.choice(colors)
print("Randomly chosen color:", random_color)

# ----- Shuffle a list of cards
cards = ["as", "rey", "reina", "jota", "10"]
random.shuffle(cards)
print("Shuffled cards:", cards)

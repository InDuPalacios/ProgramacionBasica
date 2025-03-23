# Conditional Structures

x = 15

if x > 5:
    print("X es mayor que cinco")
elif x == 15:
    print("X es igual que cinco")
else: 
    print("X es menor que cinco")

print("Afuera")

x = 15
y = 20

if x > 10 and y > 25:
    print("X es mayor que 10 y Y es mayor que 15")

if x > 10 or y > 25:
    print("X es mayor que 10 O Y es mayor que 15")

if not x > 10: 
    print("X no es mayor que 10")

# Nested condition: membership and age check
is_member = True
age = 15

if is_member:
    if age >= 15:
        print("Tienes acceso ya que ere smiembro y mayor o igual a 15 años")
    else:
        print("No tienes acceso ya que eres miembre pero menor a 15 años")
else:
    print("No eres miembro y NO TIENES ACCESO")
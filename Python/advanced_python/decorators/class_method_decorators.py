class Calculadora:
    @staticmethod
    def suma(a: int, b: int) -> int:
        return a + b
    

class Counter:
    count = 0
    @classmethod
    def increment(cls):
        cls.count +=1

Counter.increment()
Counter.increment()
print(Counter.count)


class Circulo:
    def __init__(self, radio: float):
        self._radio = radio
    
    @property
    def area(self) -> float:
        return 3.1416 * self._radio ** 2
    
    @property
    def radio(self) -> float:
        return self._radio

    @radio.setter
    def radio(self, valor: float):
        if valor < 0:
            raise ValueError("El radio no puede ser negativo")
        self._radio = valor
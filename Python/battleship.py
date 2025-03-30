import random

# Ship class
class Ship:
    def __init__(self, name, size):
        self.name = name
        self.size = size
        self.positions = []
        self.hits = 0

    def place_ship(self, board, start_row, start_col, direction):
        positions = []

        for i in range(self.size):
            r = start_row + i if direction == 'V' else start_row
            c = start_col + i if direction == 'H' else start_col

            if r >= 10 or c >= 10 or board[r][c] != ' ':
                return False

            positions.append((r, c))

        for r, c in positions:
            board[r][c] = self.name[0]

        self.positions = positions
        return True

    def hit(self):
        self.hits += 1
        return self.hits == self.size


# Ship subclasses
class Destroyer(Ship):
    def __init__(self):
        super().__init__('Destroyer', 2)

class Submarine(Ship):
    def __init__(self):
        super().__init__('Submarine', 3)

class Battleship(Ship):
    def __init__(self):
        super().__init__('Battleship', 4)


# Player class
class Player:
    def __init__(self, name, is_computer=False):
        self.name = name
        self.board = [[' ' for _ in range(10)] for _ in range(10)]
        self.hits_board = [[' ' for _ in range(10)] for _ in range(10)]
        self.ships = []
        self.is_computer = is_computer

    def place_ships(self):
        ship_types = [Destroyer(), Submarine(), Battleship()]

        for ship in ship_types:
            placed = False
            while not placed:
                if self.is_computer:
                    row = random.randint(0, 9)
                    col = random.randint(0, 9)
                    direction = random.choice(['H', 'V'])
                else:
                    self.print_board(self.board)
                    print(f"\nPlace your {ship.name} (size {ship.size})")
                    try:
                        row = int(input("Start Row (0-9): "))
                        col = int(input("Start Col (0-9): "))
                        while True:
                            direction = input("Direction (H/V): ").strip().upper()
                            if direction in ['H', 'V']:
                                break
                            else:
                                print("Invalid direction. Please enter 'H' or 'V'.")
                    except ValueError:
                        print("Invalid input. Try again.")
                        continue

                placed = ship.place_ship(self.board, row, col, direction)
                if not placed and not self.is_computer:
                    print("Invalid placement. Try again.")
                elif placed:
                    self.ships.append(ship)

    def print_board(self, board, show_ships=True):
        print("   " + " ".join(str(i) for i in range(10)))
        for i, row in enumerate(board):
            row_str = f"{i:2} " + " ".join(
                cell if (show_ships or cell in ['X', 'O']) else ' '
                for cell in row
            )
            print(row_str)

    def attack(self, opponent):
        if self.is_computer:
            while True:
                row = random.randint(0, 9)
                col = random.randint(0, 9)
                if self.hits_board[row][col] == ' ':
                    break
        else:
            print("\nYour Radar (attacks):")
            self.print_board(self.hits_board, show_ships=False)
            while True:
                try:
                    row = int(input("Attack Row (0-9): "))
                    col = int(input("Attack Col (0-9): "))
                    if self.hits_board[row][col] == ' ':
                        break
                    else:
                        print("Already attacked here.")
                except ValueError:
                    print("Invalid input. Try again.")

        target_cell = opponent.board[row][col]
        if target_cell != ' ' and target_cell not in ['X', 'O']:
            print(f"{self.name} HIT a ship at ({row}, {col})!")
            self.hits_board[row][col] = 'X'
            opponent.board[row][col] = 'X'
            for ship in opponent.ships:
                if (row, col) in ship.positions:
                    sunk = ship.hit()
                    if sunk:
                        print(f"{self.name} SUNK the {ship.name}!")
                    break
        else:
            print(f"{self.name} MISSED at ({row}, {col}).")
            self.hits_board[row][col] = 'O'
            opponent.board[row][col] = 'O'

    def all_ships_sunk(self):
        return all(ship.hits == ship.size for ship in self.ships)


# Game class
class BattleshipGame:
    def __init__(self):
        self.player = Player("You")
        self.computer = Player("Computer", is_computer=True)

    def play(self):
        print("=== Welcome to Battleship ===")
        print("\n--- Player Setup ---")
        try:
            self.player.place_ships()
            print("\n--- Computer is placing ships... ---")
            self.computer.place_ships()

            turn = 0
            while True:
                print("\n--- Your Board ---")
                self.player.print_board(self.player.board)

                if turn % 2 == 0:
                    print("\nYour Turn!")
                    self.player.attack(self.computer)
                    if self.computer.all_ships_sunk():
                        print("\n🏆 You WIN! All enemy ships are sunk!")
                        break
                else:
                    print("\nComputer's Turn!")
                    self.computer.attack(self.player)
                    if self.player.all_ships_sunk():
                        print("\n💥 You LOSE! All your ships are sunk!")
                        break
                turn += 1
        except KeyboardInterrupt:
            print("\n👋 Game ended by user (Ctrl + C). See you soon!")



# Run the game
if __name__ == "__main__":
    game = BattleshipGame()
    game.play()

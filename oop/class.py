class Cake:
    def __init__(self, p_color):
        self.color = p_color

    def changColor(self, newColor):
        self.color = newColor

# close class


cake1 = Cake("Red")
cake2 = Cake("Green")

print(cake1.color, cake2.color)

cake1.changColor("Yallo")
print(cake1.color)

class Game:
    def __init__(self, imageSrc: str, name: str) -> None:
        self.imageSrc = imageSrc
        self.name = name

    def __repr__(self) -> str:
        return f"Game(name={self.name}, imageSrc={self.imageSrc})"

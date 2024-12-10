class GameResponse:
    def __init__(self, status: str, content : object):
        self.status = status
        self.content = content
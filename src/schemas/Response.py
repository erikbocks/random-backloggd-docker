from datetime import datetime

class Response:
    def __init__(self, status: int, message : str, content : object):
        self.status = status
        self.message = message
        self.content = content
        self.timestamp = datetime.now().isoformat()

    @staticmethod
    def ok(username : str, content : object):
        return Response(200, "Esse é o jogo aleatório escolhido do backlog de " + username, content)

    @staticmethod
    def badRequest(message : str, content : object):
        return Response(400, message, content)
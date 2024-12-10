from pymemcache.client import base

class CacheManager:
    def __init__(self):
        self.client = base.Client(('database', 11211))
        pass
            
    def addInfo(self, username: str, userGames : object) -> None:
        self.client.set(username, userGames, expire=180)
        
    def getInfo(self, username : str):
        return self.client.get(username)
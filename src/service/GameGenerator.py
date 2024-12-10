from selenium.webdriver.remote.webelement import WebElement
from random import randint
import pickle

from schemas.Game import Game
from schemas.PageReader import PageReader
from schemas.GameResponse import GameResponse
from service.CacheManager import CacheManager

class GameGenerator:
    @staticmethod
    def generate(user: str, platform: str, categories: list[str], genre: str) -> Game:
        cacheManager = CacheManager()
        userGames = cacheManager.getInfo(user)

        if userGames is not None:
            userGames = pickle.loads(userGames)
            randomNumber = randint(0, (len(userGames) - 1))
            return GameResponse("SUCCESS", userGames[randomNumber])

        userGames: list[Game] = []

        baseUrl: str = GameGenerator.generateUrl(user, categories, platform, genre)

        driver = PageReader(baseUrl)
        driver.getPage(1)

        if "404" in driver.driver.title or "500" in driver.driver.title:
            driver.endInstance()
            return GameResponse("ERROR", None)

        rows: list[WebElement] = driver.getRows()
        pages: int = int(rows[len(rows) - 2].text)

        for page in range(pages):
            if pages != 1 and page != 0:
                driver.getPage(str(page + 1))

            gameList: list[WebElement] = driver.getGamesList()

            if len(gameList) == 0:
                driver.endInstance()
                return GameResponse("NO_GAME", gameList)

            for game in gameList:
                gameInfo: WebElement = driver.getGameInfo(game)

                name: str = gameInfo.accessible_name
                image: str = gameInfo.get_attribute("src")
                userGames.append(Game(image, name))

        cacheManager.addInfo(user, pickle.dumps(userGames))

        randomNumber = randint(0, (len(userGames) - 1))
        driver.endInstance()

        return GameResponse("SUCCESS", userGames[randomNumber])

    @staticmethod
    def generateUrl(user: str, categories: list[str], platform: str, genre: str) -> str:
        baseUrl = f'https://www.backloggd.com/u/{user}/games/added/type:backlog'

        if categories is not None:
            baseUrl += ';category:'

            if len(categories) == 1:
                baseUrl += categories[0]
            else:
                for category in range(len(categories)):
                    baseUrl += categories[category]

                    if category != (len(categories) - 1):
                        baseUrl += ','

        if platform is not None:
            baseUrl += f';release_platform:{platform}'

        if genre is not None:
            baseUrl += f';genre:{genre}'

        return baseUrl + '/?page='

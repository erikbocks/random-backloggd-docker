from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.options import Options
from selenium import webdriver


class PageReader:
    SELENIUM_CONTAINER_URL = "http://selenium:4444/wd/hub"

    def __init__(self, url: str) -> None:
        self.driver = webdriver.Remote(command_executor=self.SELENIUM_CONTAINER_URL, options=self.generateOptions())
        self.url = url

    def generateOptions(self) -> Options:
        options = Options()

        options.add_argument("--headless")
        options.add_argument("--inprivate")

        prefs = {
            "profile.default_content_setting_values": {
                "images": 2,
                "javascript": 2,
                "plugins": 2,
                "popups": 2
            }
        }

        options.add_experimental_option("prefs", prefs)

        return options

    def getPage(self, pageNumber: int) -> None:
        self.driver.get(self.url + str(pageNumber))

    def getRows(self) -> list[WebElement]:
        rowElement = self.driver.find_element(by=By.XPATH, value='/html/body/main/div/div[5]/nav')

        return self.getWebElementChild(rowElement)

    def getGamesList(self) -> list[WebElement]:
        gameElement = self.driver.find_element(by=By.XPATH, value='//*[@id="game-lists"]')

        return self.getWebElementChild(gameElement)

    def getGameInfo(self, gameElement: WebElement):
        return gameElement.find_element(by=By.CLASS_NAME, value="card img")

    def getWebElementChild(self, element: WebElement) -> list[WebElement]:
        return element.find_elements(by=By.XPATH, value="./child::*")

    def endInstance(self):
        self.driver.quit()

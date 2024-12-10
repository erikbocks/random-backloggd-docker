from flask import Flask, request, jsonify
from flask_cors import CORS

from service.GameGenerator import GameGenerator
from schemas.Response import Response
from schemas.GameResponse import GameResponse

app = Flask(__name__)
CORS(app)


@app.route("/randomGame/<username>", methods=['GET'])
def getRandomGameFromBacklog(username: str):
    platform: str = None
    categories: list[str] = None
    genre: str = None

    if len(request.args) != 0:
        platform = request.args.get('platform')
        genre = request.args.get('genre')
        categoriesParam: str = request.args.get('categories')

        if categoriesParam is not None:
            categories = categoriesParam.split(',')

    gameResponse: GameResponse = GameGenerator.generate(username, platform, categories, genre)

    if gameResponse.status == "ERROR":
        response: Response = Response.badRequest("An error occurred during the request. Please review your data or try again in a few minutes.", {"code": "ERROR"})
        return jsonify(response.__dict__), 400

    if gameResponse.status == "NO_GAME":
        response: Response = Response.badRequest("No game was found with the data provided.", {"code": "NO_GAME"})
        return jsonify(response.__dict__), 400

    response: Response = Response.ok(username, gameResponse.content.__dict__)
    return jsonify(response.__dict__), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

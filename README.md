# Random Backloggd - Docker EN

---

_Random Backloggd_ is a project developed with the purpose of choosing randomly a game from the user's backlog list at [Backloggd](https://backloggd.com).

## About

The platform [Backloggd](https://backloggd.com) allow gamers to maintain a journal/collection of games. Each user has a profile, which you can log games with the following criteria:

- <b>Played</b>: games that were already played
- <b>Playing</b>: games being played at the moment
- <b>Backlog</b>: games that you own/can play, but hasn't played yet
- <b>Wishlist</b>: games you wish to own

For now, we will focus on the Backlog list. With that many options, it can be hard to choose a game to play, right? And driven by this feeling, Random Backloggd was born.

The application web scraps the user list with the library [Selenium](https://www.selenium.dev/), and based on that list, it chooses a random game for you to play. Nothing feels better than blaming something else by the bad choice, huh? ;)

The project infrastructure is made by using [Docker](https://docker.com) containers. There will be 4 containers, created by using Docker Compose, these being:

- <b>Front-end</b>: contains the Nginx web server that hosts the page.
- <b>Back-end</b>: contains the Flask web server that handles the HTTP request to fetch a random game
- <b>Database</b>: contains the Memcached database, which caches the user games during a period of time, allowing requests referring to the same user to be answered quickly 
- <b>Selenium</b>: contains the Edge browser instance, used to scrap the Backloggd account, allowing the user to run the application even without that browser installed locally.

## Techs and Libraries

- Python 3.12.3
- Pip 24.3.1
- Selenium 4.27.1
- Pymemcache 4.0.0
- Flask 3.1.0
- Flask-Cors 5.0.0
- Memcached 1.6.33
- Docker 4.35.1
- Tailwind CSS 3.4.14
- ES 2020+

## How to use

The project itself aims to be something easy and practical to be used. The only prerequisite is to have `Docker` installed, with the version `4.35.1` or newer.

The steps are:

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this repo.
2. Open the project folder with your IDE and create a new terminal, or open straight on your terminal
3. Run the command: `docker compose up -d`

Done! Now you just have to wait a little while the containers aren't completely up and after that the page will be available at `http://localhost:3000`. 

# Random Backloggd - Docker PT/BR

---

O _Random Backloggd_ é um projeto desenvolvido com o intuito de escolher aleatoriamente um jogo da lista de _backlog_ do site [Backloggd](https://backloggd.com).

## Sobre

A plataforma [Backloggd](https://backloggd.com) possibilita que _gamers_ mantenha um diário/coleção de jogos. Cada usuário possui um perfil, e nesse perfil podem ser cadastrados jogos com os seguintes critérios:

- <b>Jogado</b>: jogos que já foram jogados.
- <b>Jogando</b>: jogos sendo jogados no momento.
- <b>_Backlog_</b>: jogos que você possui/tem acesso, porém não jogou ainda.
- <b>_Wishlist_</b>: jogos que você deseja adquirir.

Nesse projeto, iremos nos concentrar na lista de _Backlog_. Com tantas opções, podemos ficar confusos na hora de escolher o que jogar, certo? É desse sentimento que o _Random Backloggd_ nasceu.

A aplicação lê a lista do usuário fazendo _web scrapping_ com a biblioteca [Selenium](https://www.selenium.dev/), e a partir dessa lista, seleciona um jogo aleatório para você jogar. Nada melhor que poder culpar outro pela má escolha, né? ;)

A infraestrutura do projeto é composta por contêineres do [Docker](https://docker.com). Serão criados 4 contêineres com a ferramenta Docker Compose, sendo esses:

- <b>Front-end</b>: contém o servidor web Nginx que hospeda a página web.
- <b>Back-end</b>: contém o servidor web Flask que recebe a requisição HTTP para buscar um jogo aleatório.
- <b>Database</b>: contém o banco de dados de Memcached, que armazena os jogos de determinado usuário por um período, fazendo com que várias consultas seguidas que se referem ao mesmo usuário sejam respondidas mais rapidamente.
- <b>Selenium</b>: contém a instância de um navegador Edge, utilizada para fazer a consulta no perfil do Backloggd, fazendo com que não seja necessário haver tal navegador instalado localmente.

## Tecnologias e Bibliotecas

- Python 3.12.3
- Pip 24.3.1
- Selenium 4.27.1
- Pymemcache 4.0.0
- Flask 3.1.0
- Flask-Cors 5.0.0
- Memcached 1.6.33
- Docker 4.35.1
- Tailwind CSS 3.4.14
- ES 2020+

## Como usar

O projeto, desde seu início, tem o objetivo de ser algo fácil e prático de ser executado. O único requisito é ter o `Docker` instalado, na versão `4.35.1` ou posterior. 

Os passos são os seguintes:

1. [Clonar](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository) esse repositório
2. Abrir o diretório com sua IDE de preferência (ou diretamente via terminal) e criar um novo terminal.
3. Executar o comando: `docker compose up -d`

Pronto! Agora é só esperar os contêineres estarem totalmente inicializados e a página estará disponível em `http://localhost:3000`.
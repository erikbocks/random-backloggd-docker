FROM python:3

RUN mkdir /usr/app
WORKDIR /usr/app/src

RUN python3 -m venv /usr/app/docker-env
ENV PATH="/usr/app/docker-env/bin:$PATH"

COPY ./src/requirements.txt .
RUN pip install \-r ./requirements.txt

COPY ./src/ .

EXPOSE 5000

ENTRYPOINT [ "python3", "main.py" ]
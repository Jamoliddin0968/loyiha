FROM python:3.8-slim-buster
ENV PYTHONUNBUFFERED = 1
WORKDIR /app
COPY . .
COPY req.txt req.txt

RUN python -m pip install --upgrade pip && pip install -r req.txt
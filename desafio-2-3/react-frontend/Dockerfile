FROM node:18-alpine

ENV HOST=0.0.0.0
ENV BROWSER=none

RUN apk add --no-cache bash

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ ".docker/entrypoint.sh" ]
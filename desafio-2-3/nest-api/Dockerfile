FROM node:lts-alpine

RUN apk add --no-cache bash

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT [ ".docker/entrypoint.sh" ]
FROM node:alpine

RUN apk add --no-cache postgresql-client

WORKDIR /usr/src/app

EXPOSE 3000

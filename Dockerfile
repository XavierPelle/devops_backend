FROM node:alpine

RUN apk add --no-cache postgresql-client

RUN npm install

WORKDIR /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "start"]

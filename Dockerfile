FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
COPY . .

RUN yarn install

#EXPOSE 3001

CMD [ "yarn", "start:dev" ]
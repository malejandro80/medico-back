FROM node:18-alpine

WORKDIR /app

ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN yarn install
ADD . /app
EXPOSE 3000
#EXPOSE 3001

CMD ["npm", "run", "start"]
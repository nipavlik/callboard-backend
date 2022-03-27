FROM node:12

EXPOSE 3000

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . /usr/src/app

RUN npm run build

CMD [ "node", "dist/main.js" ]
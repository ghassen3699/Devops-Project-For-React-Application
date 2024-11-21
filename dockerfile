FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

COPY ./src ./src

COPY ./public ./public

RUN npm install

COPY . .

EXPOSE 3000

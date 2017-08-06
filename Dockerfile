FROM node:argon

RUN mkdir -p /app/server
WORKDIR /app

COPY package.json /app
RUN npm install

COPY ./server /app/server

EXPOSE 3000 5858

CMD ["npm", "start"]

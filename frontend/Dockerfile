FROM node:7.7

RUN mkdir frontend
WORKDIR /frontend

COPY package.json /frontend
RUN npm install

COPY . /frontend
RUN npm rebuild node-sass

EXPOSE 3000

CMD ["npm", "start"]

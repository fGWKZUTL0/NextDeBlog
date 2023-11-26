FROM node:20
ENV TZ Asia/Tokyo
WORKDIR /nextdeblog

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

FROM node:10.16.0

COPY . /source/.
WORKDIR /source

RUN npm install -g cubejs-cli
RUN npm i --save @cubejs-client/core
RUN npm i --save @cubejs-client/react

EXPOSE 4000

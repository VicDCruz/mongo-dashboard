FROM node:10.16.0

RUN apt update
RUN apt install -y mongodb
RUN npm install -g cubejs-cli
RUN npm i --save @cubejs-client/core
RUN npm i --save @cubejs-client/react
RUN cubejs create real-time-dashboard -d mongobi
RUN mkdir output
WORKDIR /real-time-dashboard
COPY .env .env

EXPOSE 4000

ENTRYPOINT [ "npm", "run", "dev" ]

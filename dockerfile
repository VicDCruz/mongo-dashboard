FROM node:10.16.0

RUN apt update
RUN apt install -y mongodb
RUN apt install -y nano
RUN npm install -g cubejs-cli
RUN npm i --save @cubejs-client/core
RUN npm i --save @cubejs-client/react

WORKDIR /real-time-dashboard

COPY real-time-dashboard/package.json ./
COPY real-time-dashboard/package-lock.json ./
RUN ls
RUN npm install

COPY real-time-dashboard /real-time-dashboard
ENV PATH /real-time-dashboard/node_modules/.bin:$PATH

RUN mkdir output

EXPOSE 4000

ENTRYPOINT [ "npm", "run", "dev" ]

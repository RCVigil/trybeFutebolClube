FROM node:16.14-alpine

WORKDIR /app-frontend

COPY . /app-frontend

RUN npm install

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]
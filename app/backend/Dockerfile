FROM node:16.14-alpine

WORKDIR /app-backend

COPY . /app-backend

RUN npm install

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]
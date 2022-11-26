FROM node:16.14-alpine

WORKDIR /app-backend

COPY . .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]

CMD [ "predev", "start" ]
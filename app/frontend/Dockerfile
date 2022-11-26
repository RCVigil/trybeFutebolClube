FROM node:16.14-alpine

WORKDIR /app-frontend

COPY . .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]
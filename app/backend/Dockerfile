FROM node:16.14-alpine

WORKDIR /app-backend

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]

CMD [ "predev", "start" ]
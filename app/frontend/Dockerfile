FROM node:16.14-alpine

WORKDIR /app-frontend

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]
FROM node:14-alpine3.15

RUN apk update

WORKDIR /app

COPY package*.json ./

COPY tsconfig.json ./

COPY src /app/src

RUN ls -a

RUN npm install

RUN npm run build

CMD ["node", "./dist/index.js"]
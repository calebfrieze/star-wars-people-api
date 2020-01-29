FROM node:latest

WORKDIR /usr/src/app

COPY ./package.json ./package-lock.json ./

COPY ./tsconfig.json ./

COPY ./src ./src

RUN npm ci

RUN npm run build

CMD ["node", "dist/"]

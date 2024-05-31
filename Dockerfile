FROM node:latest AS build
COPY package.json package-lock.json /app/
COPY src /app/src
COPY public app/public
COPY .husky /app/.husky
COPY *.js *.ts *.json /app/
WORKDIR /app
RUN npm install && npm run build

FROM node:latest AS production
COPY --from=build /app /app
WORKDIR /app
CMD ["npm", "run", "start"]

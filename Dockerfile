FROM node:latest AS build
COPY package.json package-lock.json /app/
COPY src /app/src
COPY .husky /app/.husky
COPY *.js *.ts /app/
WORKDIR /app
RUN npm install
CMD ["npm", "run", "build"]

FROM node:latest AS production
COPY --from=build /app /app
WORKDIR /app
CMD ["npm", "run", "start"]

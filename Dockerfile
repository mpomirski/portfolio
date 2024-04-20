FROM node:latest as build
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "run", "build"]

FROM node:latest as production
COPY --from=build /app /app
WORKDIR /app
CMD ["npm", "run", "start"]
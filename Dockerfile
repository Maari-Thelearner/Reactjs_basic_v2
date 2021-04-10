FROM node:12.21.0-alpine3.11
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm prune --production
COPY . .
ENTRYPOINT ["npm","start"]
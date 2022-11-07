FROM node:19-bullseye
WORKDIR /app

COPY package*.json ./
RUN npm i 

COPY tsconfig.json ./
COPY src ./src
RUN npx tsc

RUN adduser --no-create-home --group  --disabled-login --system user1
RUN chown user1 -R /app
USER user1

CMD node build/index.js
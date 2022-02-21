FROM node:14

# create app dir
WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./

RUN npm install

# bundle app source
COPY . .
COPY .env.production .env

RUN npm run build

ENV NODE_ENV production

EXPOSE 8080
CMD [ "node", "dist/index.js" ]

USER node
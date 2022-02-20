FROM node:14

# create app dir
WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./

RUN npm install
RUN npm run build

# bundle app source
COPY . .

ENV NODE_ENV production

EXPOSE 8080
CMD [ "node", "dist/index.js" ]

USER node
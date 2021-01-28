FROM node:10-alpine3.10
LABEL maintainer 'ProvaNode'

WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm","start"]
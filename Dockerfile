FROM node:16-alpine

WORKDIR /usr/src/app/api

COPY . .

RUN npm install

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "dev"]
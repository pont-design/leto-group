FROM node:16-alpine

WORKDIR /usr/src/app/api

COPY . .

RUN yarn

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "dev"]
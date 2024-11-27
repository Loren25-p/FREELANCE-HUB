FROM node:latest

WORKDIR /freelance

COPY . /freelance

EXPOSE 1234

RUN npm i

CMD ["npm", "start"]



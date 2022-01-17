FROM node:14
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

COPY "index.js" .

ENV PORT 8080
EXPOSE 8080

CMD [ "node", "index.js"]

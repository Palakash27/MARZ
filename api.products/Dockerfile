FROM node:17

WORKDIR /api.products

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5002

CMD ["npm", "start"]

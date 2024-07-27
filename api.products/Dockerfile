FROM node:20

WORKDIR /api.products

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5002

CMD ["npm", "start"]

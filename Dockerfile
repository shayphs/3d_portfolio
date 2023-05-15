FROM node:16.13.0-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5173
CMD npm run dev

# $ docker-compose up
# $ docker-compose build
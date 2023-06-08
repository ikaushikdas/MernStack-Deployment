FROM node:10
WORKDIR /app
COPY  package*.json ./
#COPY ./package-lock.json /app
RUN npm install
#RUN npm install mongoose
COPY . .
EXPOSE 4000
CMD node index.js

FROM node:20-slim
WORKDIR /app
COPY package*.json ./
COPY client/package*.json ./client/
RUN npm install && cd client && npm install
COPY . .
RUN cd client && npm run build
ENV PORT=3001
EXPOSE 3001
CMD ["node", "server/index.js"]

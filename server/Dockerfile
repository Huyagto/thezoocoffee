FROM node:20

WORKDIR /app

# Configure npm for better network reliability
RUN npm config set registry https://registry.npmjs.org/
RUN npm config set fetch-retry-mintimeout 20000
RUN npm config set fetch-retry-maxtimeout 120000
RUN npm config set fetch-timeout 300000

COPY package*.json ./

# Use npm ci for more reliable installs, with retry logic
RUN npm ci --only=production || (sleep 5 && npm ci --only=production) || (sleep 10 && npm ci --only=production)

COPY . .

RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "start"]
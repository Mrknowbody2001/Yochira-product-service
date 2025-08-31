# Use lightweight Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy all project files
COPY . .

# Use environment variables from .env file
# (Docker won't automatically read .env, will be passed via docker-compose or manually)
ENV NODE_ENV=production

# Expose the port that your app uses
EXPOSE 5001

# Start the application
CMD ["node", "app.js"]

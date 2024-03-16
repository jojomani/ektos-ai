# Use the official Node.js image as the base
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the server code
COPY . .

# Expose the server port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
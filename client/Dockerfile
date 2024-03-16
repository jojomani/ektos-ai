# Use the official Node.js image as the base
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the client code
COPY . .

# Build the frontend
RUN npm run build

# Use the official Nginx image as the base
FROM nginx:stable-alpine

# Copy the built frontend files to the Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the frontend port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
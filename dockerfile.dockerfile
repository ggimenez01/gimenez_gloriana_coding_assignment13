# Use an official Node.js runtime as the base image
FROM node:14 as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the production build of the create react app
COPY build ./build

# Start a new stage for the production image
FROM nginx:1.21-alpine as production-stage

# Copy the build files from the previous stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 8083
EXPOSE 8083

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]

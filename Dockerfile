# Step 1: Use an official Nginx image as the base image
FROM nginx:alpine

# Step 2: Copy the website files from the local machine to the Nginx HTML directory
COPY . /usr/share/nginx/html

# Step 3: Expose the default HTTP port (80) to access the app from outside the container
EXPOSE 80

# Step 4: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

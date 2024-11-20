# Use the official NGINX image to serve static files
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy only the necessary files (excluding .git and other unnecessary files)
COPY . .

# Expose port 80 to allow external access
EXPOSE 80

# Default command to start NGINX
CMD ["nginx", "-g", "daemon off;"]
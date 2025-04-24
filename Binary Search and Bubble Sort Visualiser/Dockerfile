# Use official Nginx image from DockerHub
FROM nginx:alpine

# Copy your static files into the nginx public directory
COPY . /usr/share/nginx/html

# Expose the default NGINX port
EXPOSE 80

# Start NGINX when container launches
CMD ["nginx", "-g", "daemon off;"]

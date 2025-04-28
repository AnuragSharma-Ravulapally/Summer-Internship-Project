# Use a tiny Nginx image
FROM nginx:alpine

# Copy just your built site into Nginx's web root:
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
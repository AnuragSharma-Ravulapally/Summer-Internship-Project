# Use official lightweight Nginx image
FROM nginx:alpine

# Remove the default nginx web files
RUN rm -rf /usr/share/nginx/html/*

# Copy files from the subfolder into the nginx html folder
COPY "Binary Search and Bubble Sort Visualiser/" /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# nginx will start automatically (no need for CMD)

FROM node:18-alpine AS builder

WORKDIR /app

# Copy app files
COPY index.html .
COPY styles.css .
COPY script.js .

# Use nginx to serve the static files
FROM nginx:alpine

# Copy nginx configuration
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy app files to nginx
COPY --from=builder /app/index.html /usr/share/nginx/html/
COPY --from=builder /app/styles.css /usr/share/nginx/html/
COPY --from=builder /app/script.js /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

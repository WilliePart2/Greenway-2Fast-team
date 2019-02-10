FROM nginx:alpine

RUN mkdir -p /var/www/web
WORKDIR /var/www/web

ADD nginx.conf /etc/nginx/nginx.conf

ADD build /var/www/web

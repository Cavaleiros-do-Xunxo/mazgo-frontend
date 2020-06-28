FROM nginx:alpine

COPY dist/mini-amazon-go-front-end /usr/share/nginx/html
COPY docker /etc/nginx/conf.d

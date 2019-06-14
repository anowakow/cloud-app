FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
RUN printenv
WORKDIR /usr/share/nginx/html
COPY $PWD/dist/cloud-app /usr/share/nginx/html/.
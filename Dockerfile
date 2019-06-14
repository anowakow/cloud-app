FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
RUN printenv
RUN echo $PROJECT_DIR
WORKDIR /usr/share/nginx/html
ADD dist/cloud-app /usr/share/nginx/html/.
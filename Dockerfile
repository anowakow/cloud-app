FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
RUN printenv
RUN echo $PROJECT_DIR
WORKDIR /usr/share/nginx/html
COPY . /usr/share/nginx/html/.
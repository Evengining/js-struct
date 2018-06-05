FROM nginx

EXPOSE 5000

COPY application /usr/share/nginx/html

COPY src /usr/share/nginx/html/src

CMD echo 'run'; exec nginx -g 'daemon off;'

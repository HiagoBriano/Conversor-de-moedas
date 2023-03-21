FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=improving

COPY ./sql/sql.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

# docker build -t improving_mysql MySQL.Dockerfile
# docker build -t improving_mysql .
# docker run -d -p 3306:3306 improving_mysql
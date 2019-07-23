# node mysql docker

Just a simple node server application that access a MySQL database inside a docker container

## How execute server

node app.js

## Creating a empty container MySQL

docker run -it --name mysql -e MYSQL_ROOT_PASSWORD=mysql-pwd -p 3306:3306 -d mysql

### Acessing the empty mysql

mysql -u root -pmysql-pw

## Using the dockerfile to initiate the container

### Building using dockerfile

#### Creating image

docker build -t docker-mysql -f dockerfile .

#### Running container

To run a container use a command like this:

docker run -d --name ${CONTAINER_NAME} -e MYSQL_ROOT_PASSWORD=${DB_ROOT_PASSWORD} -e MYSQL_USER=${DB_USER} -e MYSQL_PASSWORD=${DB_USER_PASSWORD} -e MYSQL_DATABASE=${DB_NAME} ${IMAGE_NAME}

Ex.:
docker run -d --name local-mysql -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=tardelli -e MYSQL_PASSWORD=tardelli -e MYSQL_DATABASE=test-db docker-mysql

## Container shell access and viewing MySQL logs

The docker exec command allows you to run commands inside a Docker container. The following command line will give you a bash shell inside your mysql container:

docker exec -it some-mysql bash

### The log is available through Docker's container log:

docker logs some-mysql

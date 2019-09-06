# Projeto de teste NodeJS

Projeto com o objetivo de testar as funcionalidades de um servidor NodeJS usando:

* Express
* log4js
* MySQL (docker)

## Banco de dados

Foi criado uma estrutura básica de banco de dados em um MySQL em um container docker

### Versão MySQL

A estrutura básica está descrita no arquivo mysql_ddl.sql

#### Usando container docker

O primeiro passo é criar a imagem do container. A partir do diretório /resources, execute:

```bash
docker build -f docker/dockerfile-mysql -t mysql-experiment .
```

Com a imagem criada, agora basta rodar um container. Para tanto, execute:

```bash
docker run -d --name local-mysql -p 3306:3306 mysql-experiment --sql-mode=''
```

Para acessar o conatiner via shell, execute:

```bach
docker exec -it local-mysql bash
```

Para acessar os logs, execute:

```bash
docker logs local-mysql
```

Para usar o cliente do mysql, execute:

```bash
mysql -uuser1 -ppassword1
```

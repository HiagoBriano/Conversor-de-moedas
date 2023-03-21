# Conversor de moedas

## Visão geral

### Desafio

Implementar uma API Rest que seja capaz de realizar a conversão entre duas moedas utilizando taxas de conversões atualizadas de um serviço externo e registrar as consultas de cada usuário.

**Os usuários são capazes de:**

- Cadastrar novo usuário
- Fazer login
- Converter valores entre as moedas: BRL, USD, EUR, JPY
- Consultar histórico de suas conversões
- Consumir a API de qualquer plataforma via HTTP

### Construído com

- TypeScript
- Node.js
- Express.js
- Axios
- MySQL
- Jest e Supertest
- Swagger

## Rode em sua maquina usando o Docker

`Requisitos`

- Ter o `Git` instalado em sua máquina;
- Ter o `docker` instalado e ativado em sua máquina.

`Clonar`

Para clonar o repositório usando HTTPS:

```
git clone https://github.com/HiagoBriano/Conversor-de-moedas.git
```

Para clonar usando SSH:

```
git clone git@github.com:HiagoBriano/Conversor-de-moedas.git
```

`Iniciar`

Entre na pasta principal:

```
cd recrutamento-conversor-nodejs-hiago.artist_hotmail.com
```

Crie um arquivo `.env` com as seguintes informações:

```JSON
MYSQL_HOST=mysql
API_KEY=G1234567890 //Essa é a chave de acesso do site https://api.exchangeratesapi.io/
```
  
Inicie o docker com o comando:

```
docker-compose up -d
```

A API irá funcionar através da URL:

```
http://localhost:3001/
```

### Links

- URL da documentação: http://localhost:3001/documentation/

### Recursos úteis

- [Documentação do Swagger](https://swagger.io/specification/)
- [Vídeo: Nodejs - Criando documentação com Swagger](https://swagger.io/specification/)

## Autor

Linkedin - [Hiago Briano](https://www.linkedin.com/in/hiago-briano/)

Email - hiago.artist@hotmail.com

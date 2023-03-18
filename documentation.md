# Conversor de moedas

<div align="center"><br>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt="TypeScript" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJs" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width="40" height="40"/>
  <img src="https://wsofter.ru/wp-content/uploads/2017/12/node-express.png" alt="Express" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt="MySQL" width="40" height="40"/>
</div>

## Visão geral

### Desafio

Implementar uma API Rest que seja capaz de realizar a conversão entre duas moedas utilizando taxas de conversões atualizadas de um serviço externo.

**Os usuários são capazes de:**

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

## Rode em sua maquina usando o Docker

<details>
  <summary><b>Requisitos:</b></summary><br>
  
  - Ter o `Git` instalado em sua máquina;
  - Ter o `docker` instalado e ativado em sua máquina.
  - Ter o `bitbucket` configurado sua máquina com acesso a esse [repositório](https://bitbucket.org/recrutamento_jya_nodejs/recrutamento-conversor-nodejs-hiago.artist_hotmail.com/src/master/).
  
</details>

<details>
  <summary><b>Clonar</b></summary><br>

Para clonar o repositório usando HTTPS:

```
git clone https://HiagoBri@bitbucket.org/recrutamento_jya_nodejs/recrutamento-conversor-nodejs-hiago.artist_hotmail.com.git
```

Para clonar usando SSH:

```
git clone git@bitbucket.org:recrutamento_jya_nodejs/recrutamento-conversor-nodejs-hiago.artist_hotmail.com.git
```
</details>

<details>
  <summary><b>Iniciar</b></summary><br>

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

</details>

</details>

## Endpoints

### Link

- URL padrão da Api: http://localhost:3001/

### /

<details><summary><strong>Verifica se a API está funcionando</strong></summary><br />

- Métodos de requisição: GET

- Formato da resposta:

```json
{
    "message": "active server"
}
```

</details>
</details>

### /convert/(id_usuario)

<details><summary><strong>Converter valor</strong></summary><br />

- Métodos de requisição: GET

- Formato do body:

```json
{
    "to": "USD",
    "from": "BRL",
    "amount": 5
}
```

- Formato da resposta:

```json
{
    "transactionId": 1,
    "userId": 10,
    "originCurrency": "BRL",
    "originValue": 5,
    "destinationCurrency": "USD",
    "destinationValue": 0.947095,
    "conversionRateUsed": 0.189419,
    "date": "2023-03-18T00:50:29.000Z"
}
```

</details>
</details>

### /consult/(id_usuario)

<details><summary><strong>Buscar consultas realizadas pelo usuário</strong></summary><br />

- Métodos de requisição: GET

- Formato da resposta:

```json
[
    {
        "id": 1,
        "user_id": 10,
        "origin_currency": "BRL",
        "origin_value": 5,
        "destination_currency": "USD",
        "conversion_rate_used": 0.189419,
        "created_at": "2023-03-18T03:19:40.000Z"
    },
    {
        "id": 2,
        "user_id": 10,
        "origin_currency": "BRL",
        "origin_value": 5,
        "destination_currency": "USD",
        "conversion_rate_used": 0.189419,
        "created_at": "2023-03-18T03:19:43.000Z"
    }
]
```

</details>
</details>

## Autor

Linkedin - [Hiago Briano](https://www.linkedin.com/in/hiago-briano/)

Email - hiago.artist@hotmail.com
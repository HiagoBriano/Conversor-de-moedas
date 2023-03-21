# Informa a imagem que eu quero ultilizar
FROM node:16.19.0

# Pasta de trabalho no docker
WORKDIR /app/backend

# Copia os arquivos do PC para o docker
COPY . ./

# Comando para instalar as dependências
RUN npm i

# Infoma a porta que eu quero exportar para o PC acessar
EXPOSE 3001

# Comando para iniciar servidor
# CMD ["npm", "run", "docker"]
CMD ["npm", "start"]

# docker build -t improving_api .
# docker run -d -p 3001:3001 improving_api
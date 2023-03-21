FROM node:16.19.0

WORKDIR /app/backend

COPY . ./

RUN npm i

EXPOSE 3001

CMD ["npm", "start"]

# docker build -t improving_api .
# docker run -d -p 3001:3001 improving_api
# Etapa 1: Construção do ambiente
FROM node:18 AS builder

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json para o contêiner
COPY package.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do projeto para o contêiner
COPY . .

# Execute a build do projeto
RUN npm run build

# Etapa 2: Configuração do ambiente de produção
FROM nginx:stable-alpine

# Copie os arquivos compilados da etapa de build para o diretório do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponha a porta 80 para acesso externo
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]

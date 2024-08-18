# Etapa 1: Construção do ambiente
FROM node:18 AS builder

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json e yarn.lock (ou package-lock.json) para o contêiner
COPY package.json yarn.lock ./

# Instale as dependências do projeto
RUN yarn install

# Copie todos os arquivos do projeto para o contêiner
COPY . .

# Execute a build do projeto
RUN yarn run build

# Etapa 2: Configuração do ambiente de produção
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos do projeto do estágio de build para o novo contêiner
COPY --from=builder /app /app

# Instale as dependências de produção
RUN yarn install --production

# Exponha a porta na qual o aplicativo será executado
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["yarn", "run", "start"]

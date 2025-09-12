# Etapa 1: Build con Node
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install --legacy-peer-deps

# Copiar todo el proyecto
COPY . .

# Asegurar permisos correctos
RUN chmod -R 755 ./node_modules/.bin

# Build de Vite
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/container.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Etapa 1: Build con Node
FROM node:18-alpine AS builder

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar todo el proyecto y construir
COPY . .
RUN npm run build   # Vite genera /app/dist

# ===========================
# Etapa 2: Servir con Nginx
# ===========================
FROM nginx:alpine

# Eliminar la configuración default de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar configuración personalizada
COPY ./nginx/container.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos compilados de Vite
COPY --from=builder /app/dist /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

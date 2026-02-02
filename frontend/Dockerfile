# Etapa 1: Construcción (Build) 
FROM node:20-alpine AS build 
WORKDIR /app 
COPY package*.json ./ 
RUN npm install 
COPY . . 
RUN npm run build 
# Etapa 2: Servidor de Producción (Nginx) 
FROM nginx:stable-alpine 
# Copiamos los archivos compilados desde la etapa 'build' 
# Si usas Vite es 'dist', si usas CRA es 'build' 
COPY --from=build /app/dist /usr/share/nginx/html 
# Copiamos una configuración personalizada de Nginx si es necesario 
# COPY nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]
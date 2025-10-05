# Tahap 1: Build aplikasi
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Tahap 2: Jalankan dengan Nginx
FROM nginx:alpine

# Hapus file html default nginx
RUN rm -rf /usr/share/nginx/html/*

# Salin hasil build React
COPY --from=builder /app/dist /usr/share/nginx/html

# Salin konfigurasi nginx custom (opsional)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

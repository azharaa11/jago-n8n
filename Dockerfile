# Step 1: Build app
FROM node:22.16 AS builder

# Set working directory
WORKDIR /app

# Copy file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy seluruh source code
COPY . .

# Pastikan vite bisa dieksekusi
RUN chmod +x node_modules/.bin/vite

# Jalankan build Vite
RUN npm run build

# Step 2: Serve build hasilnya pakai Caddy
FROM caddy:2-alpine AS runner

# Set working directory untuk Caddy
WORKDIR /srv

# Copy hasil build dari tahap builder
COPY --from=builder /app/dist /srv

# Copy konfigurasi Caddy custom
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80

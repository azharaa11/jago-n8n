# Step 1: build app
FROM node:22.16 AS builder

WORKDIR /app

# copy package.json + lockfile dulu
COPY package*.json ./

RUN npm ci

# copy semua source code
COPY . .

# build vite
RUN npm run build

# Step 2: serve built app pakai caddy
FROM caddy:2-alpine AS runner

# hapus default index bawaan Caddy
RUN rm -rf /usr/share/caddy/*

# copy hasil build ke folder yg benar
COPY --from=builder /app/dist /usr/share/caddy

EXPOSE 80

# Caddy otomatis serve /usr/share/caddy

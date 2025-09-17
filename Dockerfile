# Step 1: Build app
FROM node:22.16 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Pastikan vite bisa dieksekusi
RUN chmod +x node_modules/.bin/vite

RUN npm run build


# Step 2: Serve build hasilnya pakai Caddy
FROM caddy:2-alpine AS runner

WORKDIR /srv

COPY --from=builder /app/dist /srv

EXPOSE 80

# Step 1: build app
FROM node:22.16 AS builder

WORKDIR /app

# copy package.json + lockfile dulu biar cache aman
COPY package*.json ./

RUN npm ci

# copy semua source code
COPY . .

# build vite
RUN npm run build

# Step 2: serve built app pakai caddy
FROM caddy:2-alpine AS runner

WORKDIR /srv

# copy hasil build
COPY --from=builder /app/dist /srv

# expose port 80
EXPOSE 80

# caddy otomatis serve /srv
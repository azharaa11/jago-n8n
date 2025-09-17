# Step 1: Build app dengan Node.js 22.16
FROM node:22.16 AS builder

WORKDIR /app

# Copy package.json + lockfile dulu
COPY package*.json ./

RUN npm ci

# Copy semua source
COPY . .

# Build Vite
RUN npm run build

# Step 2: Serve static file pakai Caddy
FROM caddy:2-alpine AS runner

WORKDIR /srv

# Copy hasil build dari builder
COPY --from=builder /app/dist /srv

# Expose port 80
EXPOSE 80

# Caddy otomatis serve folder /srv
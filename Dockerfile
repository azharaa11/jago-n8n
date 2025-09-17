# Step 1: Build app
FROM node:22.16 AS builder

WORKDIR /app

# Copy package.json + lockfile dulu supaya cache efektif
COPY package*.json ./

# Install dependencies (include dev untuk build)
RUN npm ci

# Copy semua source code
COPY . .

# Build vite (pakai script di package.json)
RUN npm run build


# Step 2: Serve build hasilnya pakai Caddy
FROM caddy:2-alpine AS runner

WORKDIR /srv

# Copy hasil build dari builder
COPY --from=builder /app/dist /srv

# Expose port 80 (Caddy default)
EXPOSE 80

# Caddy otomatis serve isi /srv

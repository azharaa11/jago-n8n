# Step 1: build app pakai Node.js 20 (sesuai package.json)
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json + lockfile biar cache aman
COPY package*.json ./

# Install dependency (bersih sesuai lockfile)
RUN npm ci

# Copy semua source code
COPY . .

# Build Vite pakai npx biar pasti ketemu bin-nya
RUN npx vite build

# Step 2: serve built app pakai Caddy
FROM caddy:2-alpine AS runner

WORKDIR /srv

# Copy hasil build dari builder
COPY --from=builder /app/dist /srv

# Expose port 80 (Caddy serve otomatis isi folder /srv)
EXPOSE 80

# Command default Caddy udah otomatis serve /srvggit
# Step 1: Build dengan Node 22.16
FROM node:22.16 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx vite build

# Step 2: Serve hasil build dengan nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# syntax=docker/dockerfile:1.7
# ---- Build stage: install prod deps (compiles better-sqlite3 native binding) ----
FROM node:20-alpine AS build
RUN apk add --no-cache python3 make g++
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev --no-audit --no-fund

# ---- Runtime stage: copy app + node_modules into a slim image ----
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production \
    PORT=8041 \
    HOST=0.0.0.0 \
    DATA_DIR=/data

COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./
COPY server/ ./server/
COPY public/ ./public/

RUN mkdir -p /data && chown -R node:node /data /app
USER node
EXPOSE 8041

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8041/api/health > /dev/null 2>&1 || exit 1

CMD ["node", "server/index.js"]

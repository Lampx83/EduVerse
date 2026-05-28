# syntax=docker/dockerfile:1.7

# ---- Stage 1: EduVerse prod deps (compiles better-sqlite3 native binding) ----
FROM node:20-alpine AS eduverse-deps
RUN apk add --no-cache python3 make g++
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev --no-audit --no-fund

# ---- Stage 2: build embedded Pharmacy-AI (Next.js standalone) ----
FROM node:20-alpine AS segue-build
WORKDIR /app
# basePath is baked into the build. Default /segue; when EduVerse sits under
# limio.vn/ps build with --build-arg SEGUE_BASE_PATH=/ps/segue.
ARG SEGUE_BASE_PATH=/segue
ENV SEGUE_BASE_PATH=$SEGUE_BASE_PATH
COPY pharmacy-ai/package*.json ./
RUN npm install --no-audit --no-fund
COPY pharmacy-ai/ ./
RUN npm run build

# ---- Runtime: slim image running both processes ----
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production \
    PORT=8041 \
    HOST=0.0.0.0 \
    DATA_DIR=/data \
    SEGUE_TARGET=http://127.0.0.1:3100

# EduVerse (Express + SQLite + WebSocket)
COPY --from=eduverse-deps /app/node_modules ./node_modules
COPY package*.json ./
COPY server/ ./server/
COPY public/ ./public/

# Embedded Pharmacy-AI (Next.js standalone: server.js + minimal node_modules).
# static/ and public/ are not bundled into standalone — copy them alongside.
COPY --from=segue-build /app/.next/standalone ./pharmacy-ai
COPY --from=segue-build /app/.next/static ./pharmacy-ai/.next/static
COPY --from=segue-build /app/public ./pharmacy-ai/public

COPY docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh && mkdir -p /data && chown -R node:node /data /app
USER node
EXPOSE 8041

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8041/api/health > /dev/null 2>&1 || exit 1

# Starts Pharmacy-AI (internal :3100) + EduVerse (Express :8041, foreground).
CMD ["./docker-entrypoint.sh"]

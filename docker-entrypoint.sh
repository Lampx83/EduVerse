#!/bin/sh
set -e

# Embedded Pharmacy-AI (Next.js standalone) on an internal port. EduVerse's
# Express server reverse-proxies <BASE_PATH>/segue → this process.
# PORT/HOSTNAME here override the container's PORT for THIS process only.
PORT=3100 HOSTNAME=127.0.0.1 node /app/pharmacy-ai/server.js &

# EduVerse (Express) is the main service + healthcheck target → foreground.
# If Pharmacy-AI is down the proxy degrades gracefully to a "chưa chạy" page.
exec node /app/server/index.js

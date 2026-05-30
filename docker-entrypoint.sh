#!/bin/sh
set -e

# EduVerse (Express + SQLite + WebSocket) — main service + healthcheck target.
exec node /app/server/index.js

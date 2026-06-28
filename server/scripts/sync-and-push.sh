#!/usr/bin/env bash
# sync-and-push.sh — Chạy trên production server, mỗi ngày lúc 7:00 sáng ICT
#
# Nhiệm vụ:
#   1. Đồng bộ requests DB → ai-board/inbox.json
#   2. Commit + push lên GitHub
#   3. (Tuỳ chọn) Trigger GitHub Actions workflow
#
# Cài đặt cron (chỉnh path cho đúng):
#   0 0 * * * /path/to/EduVerse/server/scripts/sync-and-push.sh >> /var/log/eduverse-aiboard.log 2>&1
#
# Biến môi trường cần thiết (đặt trong .env hoặc cron environment):
#   GH_TOKEN   — Personal Access Token có quyền repo + workflow
#   REPO_PATH  — Đường dẫn tuyệt đối đến thư mục repo (mặc định: thư mục cha của script)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_PATH="${REPO_PATH:-$(cd "$SCRIPT_DIR/../.." && pwd)}"

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

log "=== EduVerse AI Board — Sync & Push ==="
log "Repo: $REPO_PATH"

cd "$REPO_PATH"

# Load .env nếu có
if [[ -f ".env" ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

# 1. Đồng bộ DB → inbox.json
log "Đang sync DB → ai-board/inbox.json …"
node server/scripts/sync-inbox.mjs

# 2. Kiểm tra có gì thay đổi không
if git diff --quiet ai-board/inbox.json; then
  log "inbox.json không thay đổi — không cần push."
  exit 0
fi

# 3. Commit + push
TODAY=$(date '+%Y-%m-%d')
git add ai-board/inbox.json
git commit -m "sync(inbox): cập nhật yêu cầu pending — $TODAY"
git push origin main

log "Đã push inbox.json lên main."

# 4. (Tuỳ chọn) Trigger GitHub Actions workflow qua API
if [[ -n "${GH_TOKEN:-}" ]]; then
  REPO_SLUG=$(git remote get-url origin | sed 's|.*github\.com[:/]\(.*\)\.git|\1|;s|.*github\.com[:/]\(.*\)|\1|')
  log "Triggering workflow cho repo: $REPO_SLUG"
  curl -s -X POST \
    -H "Authorization: Bearer $GH_TOKEN" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/$REPO_SLUG/actions/workflows/ai-board-daily.yml/dispatches" \
    -d "{\"ref\":\"main\",\"inputs\":{\"note\":\"Auto-triggered sau sync $TODAY\"}}" \
    && log "Workflow triggered thành công." \
    || log "Cảnh báo: không trigger được workflow (kiểm tra GH_TOKEN)."
else
  log "GH_TOKEN không có — bỏ qua bước trigger workflow (workflow sẽ tự chạy theo lịch 7:30)."
fi

log "=== Xong ==="

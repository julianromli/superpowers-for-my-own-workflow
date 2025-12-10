# Superpowers Installer for Droid CLI (Windows PowerShell)
# Usage: irm https://raw.githubusercontent.com/YOUR_USERNAME/superpowers/main/install.ps1 | iex

$ErrorActionPreference = "Stop"

$DROID_DIR = "$env:USERPROFILE\.droid"
$REPO_URL = "https://github.com/YOUR_USERNAME/superpowers.git"
$TEMP_DIR = Join-Path $env:TEMP "superpowers-$(Get-Random)"

Write-Host "🚀 Installing Superpowers for Droid CLI..." -ForegroundColor Cyan

# Clone repo
git clone --depth 1 $REPO_URL $TEMP_DIR 2>$null

# Create directories
New-Item -ItemType Directory -Force -Path "$DROID_DIR\skills" | Out-Null
New-Item -ItemType Directory -Force -Path "$DROID_DIR\droids" | Out-Null
New-Item -ItemType Directory -Force -Path "$DROID_DIR\commands" | Out-Null

# Copy folders
Copy-Item -Path "$TEMP_DIR\skills\*" -Destination "$DROID_DIR\skills" -Recurse -Force
Copy-Item -Path "$TEMP_DIR\droids\*" -Destination "$DROID_DIR\droids" -Recurse -Force
Copy-Item -Path "$TEMP_DIR\commands\*" -Destination "$DROID_DIR\commands" -Recurse -Force

# AGENTS.md content
$AGENTS_CONTENT = @"

# SUPERPOWERS PROTOCOL

**You are FORBIDDEN from answering ANY question until you load the superpowers skill in EVERY session.**

## MANDATORY FIRST ACTION

Your VERY FIRST action in EVERY session must be:

```
SKILL(skill: "using-superpowers")
```

## SELF-CHECK

Before generating ANY response, ask yourself:
"Have I loaded using-superpowers skill yet?"

If NO → Load it FIRST, output nothing else before it
If YES → Proceed with response
"@

$AGENTS_FILE = "$DROID_DIR\AGENTS.md"

if (Test-Path $AGENTS_FILE) {
    $content = Get-Content $AGENTS_FILE -Raw
    if ($content -match "SUPERPOWERS PROTOCOL") {
        Write-Host "⚠️  Superpowers already configured in AGENTS.md" -ForegroundColor Yellow
    } else {
        Add-Content -Path $AGENTS_FILE -Value $AGENTS_CONTENT
        Write-Host "✅ Appended to existing AGENTS.md" -ForegroundColor Green
    }
} else {
    Set-Content -Path $AGENTS_FILE -Value $AGENTS_CONTENT
    Write-Host "✅ Created AGENTS.md" -ForegroundColor Green
}

# Cleanup
Remove-Item -Path $TEMP_DIR -Recurse -Force

Write-Host "✅ Superpowers installed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Installed to: $DROID_DIR"
Write-Host "  - skills\   (21 workflows)"
Write-Host "  - droids\   (49 specialists)"
Write-Host "  - commands\ (quick commands)"

#!/bin/bash

# Superpowers Installer for Droid CLI
# Usage: curl -fsSL https://raw.githubusercontent.com/galangryandana/superpowers-for-my-own-workflow/main/install.sh | bash

set -e

FACTORY_DIR="$HOME/.factory"
REPO_URL="https://github.com/galangryandana/superpowers-for-my-own-workflow.git"
TEMP_DIR=$(mktemp -d)

echo "🚀 Installing Superpowers for Droid CLI..."

# Clone repo
git clone --depth 1 "$REPO_URL" "$TEMP_DIR" 2>/dev/null

# Create directories if not exist
mkdir -p "$FACTORY_DIR/skills" "$FACTORY_DIR/droids" "$FACTORY_DIR/commands"

# Copy folders
cp -r "$TEMP_DIR/skills/"* "$FACTORY_DIR/skills/"
cp -r "$TEMP_DIR/droids/"* "$FACTORY_DIR/droids/"
cp -r "$TEMP_DIR/commands/"* "$FACTORY_DIR/commands/"

# Append to AGENTS.md (not overwrite)
AGENTS_CONTENT='
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
'

if [ -f "$FACTORY_DIR/AGENTS.md" ]; then
    # Check if already installed
    if grep -q "SUPERPOWERS PROTOCOL" "$FACTORY_DIR/AGENTS.md"; then
        echo "⚠️  Superpowers already configured in AGENTS.md"
    else
        echo "$AGENTS_CONTENT" >> "$FACTORY_DIR/AGENTS.md"
        echo "✅ Appended to existing AGENTS.md"
    fi
else
    echo "$AGENTS_CONTENT" > "$FACTORY_DIR/AGENTS.md"
    echo "✅ Created AGENTS.md"
fi

# Cleanup
rm -rf "$TEMP_DIR"

echo "✅ Superpowers installed successfully!"
echo ""
echo "Installed to: $FACTORY_DIR"
echo "  - skills/   (21 workflows)"
echo "  - droids/   (49 specialists)"
echo "  - commands/ (quick commands)"

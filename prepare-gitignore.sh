#!/bin/bash

DEST_DIR="/Users/noel/Library/CloudStorage/OneDrive-Personal/Projects/Git/leonnuxy.github.io"

cat > "$DEST_DIR/.gitignore" << EOL
# Dependencies
/node_modules
/.pnp
.pnp.js

# Production build files
/build
/dist
/.next/
/out/

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# System files
.DS_Store
Thumbs.db
EOL

echo ".gitignore file created at $DEST_DIR"

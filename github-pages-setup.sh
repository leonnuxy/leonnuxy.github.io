#!/bin/bash

echo "Starting GitHub Pages repository setup..."

# Make all scripts executable
chmod +x /Users/noel/Documents/Projects-Local/portfolio/migrate-to-github-pages.sh
chmod +x /Users/noel/Documents/Projects-Local/portfolio/prepare-gitignore.sh
chmod +x /Users/noel/Documents/Projects-Local/portfolio/prepare-readme.sh

# Execute migration script
/Users/noel/Documents/Projects-Local/portfolio/migrate-to-github-pages.sh

# Create gitignore
/Users/noel/Documents/Projects-Local/portfolio/prepare-gitignore.sh

# Create README.md
/Users/noel/Documents/Projects-Local/portfolio/prepare-readme.sh

DEST_DIR="/Users/noel/Library/CloudStorage/OneDrive-Personal/Projects/Git/leonnuxy.github.io"

echo ""
echo "Setup completed! Your repository is ready at: $DEST_DIR"
echo ""
echo "Next steps:"
echo "1. Navigate to your new repository directory: cd $DEST_DIR"
echo "2. Initialize Git if not already done: git init"
echo "3. Add all files: git add ."
echo "4. Commit the files: git commit -m \"Initial commit\""
echo "5. Add your GitHub repository as remote: git remote add origin https://github.com/leonnuxy/leonnuxy.github.io.git"
echo "6. Push to GitHub: git push -u origin main"
echo ""
echo "After pushing, your site should be available at https://leonnuxy.github.io in a few minutes."

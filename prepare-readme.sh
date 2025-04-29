#!/bin/bash

DEST_DIR="/Users/noel/Library/CloudStorage/OneDrive-Personal/Projects/Git/leonnuxy.github.io"
SOURCE_DIR="/Users/noel/Documents/Projects-Local/portfolio"

# Get the name of the project (assuming it's in package.json)
PROJECT_NAME=$(grep -m 1 '"name"' "$SOURCE_DIR/package.json" 2>/dev/null | sed 's/.*"name": "\(.*\)".*/\1/' || echo "Portfolio")

cat > "$DEST_DIR/README.md" << EOL
# $PROJECT_NAME

This is my personal portfolio website hosted on GitHub Pages. You can visit it at [https://leonnuxy.github.io](https://leonnuxy.github.io).

## About

This portfolio showcases my projects, skills, and experience as a developer.

## Technologies Used

- HTML/CSS
- JavaScript
- [Other technologies you've used]

## Setup

To run this project locally:

\`\`\`
git clone https://github.com/leonnuxy/leonnuxy.github.io.git
cd leonnuxy.github.io
[Your setup instructions]
\`\`\`

## License

[Your license information]
EOL

echo "README.md created at $DEST_DIR"

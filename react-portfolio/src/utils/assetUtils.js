/**
 * Helper function to get the correct path for assets when deployed to GitHub Pages
 * @param {string} path - The relative path to the asset
 * @returns {string} - The correct path to use for the asset
 */
export const getAssetPath = (path) => {
  // If it's already a full URL, return it as is
  if (path.startsWith('http')) {
    return path;
  }
  
  // For GitHub Pages deployment, we need to adjust the path
  // Vite uses import.meta.env.BASE_URL instead of process.env.PUBLIC_URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Make sure path doesn't start with a slash if baseUrl ends with one
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${baseUrl}${normalizedPath}`;
};


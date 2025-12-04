// Get the base path for the application
// This matches the basePath in next.config.js
export const getBasePath = () => {
  // In production (GitHub Pages), we need the repository name
  // In development, no base path needed
  if (typeof window !== 'undefined') {
    // Client-side: Check if we're on GitHub Pages
    return window.location.hostname.includes('github.io') ? '/heli-forklift-ph' : ''
  }
  // Server-side: Use environment variable
  return process.env.NODE_ENV === 'production' ? '/heli-forklift-ph' : ''
}

// Get full asset path including basePath
// Use this for images from the public folder
export const getAssetPath = (path: string) => {
  const basePath = getBasePath()
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}



const isGithubPages = process.env.GITHUB_PAGES === 'true'
const BASE_PATH = '/heli-forklift-ph'

export const getBasePath = () => {
  if (typeof window !== 'undefined') {
    return window.location.hostname.includes('github.io') ? BASE_PATH : ''
  }
  return isGithubPages ? BASE_PATH : ''
}

export const getAssetPath = (path: string) => {
  const basePath = getBasePath()
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}

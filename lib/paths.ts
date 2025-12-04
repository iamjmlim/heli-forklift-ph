export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/heli-forklift-ph' : ''
}

export const getAssetPath = (path: string) => {
  const basePath = getBasePath()
  return `${basePath}${path}`
}


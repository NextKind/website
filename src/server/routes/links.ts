import linksV1 from '../../../../public/links/v1.json'

export default defineEventHandler((event) => {
  setHeader(event, 'access-control-allow-origin', '*')
  setHeader(event, 'access-control-allow-methods', 'GET, OPTIONS')
  setHeader(event, 'access-control-allow-headers', 'X-Requested-With')

  if (getMethod(event) === 'OPTIONS') {
    setResponseStatus(event, 204)
    return null
  }

  const version = Number(getQuery(event).version ?? 1)

  if (version !== 1) {
    setResponseStatus(event, 404)
    return {
      error: 'Unsupported links version.'
    }
  }

  return linksV1
})
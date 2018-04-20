/*
 * {
 *   api: '/api/pugs',
 *   type: 'GOT_PUGS',
 *   error: 'GOT_ERROR'
 *   method: 'get',
 *   config: {}
 *   cache: true
 * }
 */

const __cachedData = {

}

const cache = {
  get (url, method) {
    return __cachedData[url] && __cachedData[url][method]
  },
  set (url, method) {
    __cachedData[url] = __cachedData[url] || {}
    __cachedData[url][method] = true
  }
}

const createApiMiddleware = ajax => {
  return store => action => next => {
    if (action.api) {
      if (action.cache && cache.get(action.api, action.method)) {
        return
      } else if (action.cache) {
        cache.set(action.api, action.method)
      }
      return ajax[action.method](action.api, action.config)
        .then(res => res.data)
        .then(payload => {
          next({type: action.type, payload})
        })
        .catch(error => {
          next({type: action.error, error})
        })
    }
  }
}

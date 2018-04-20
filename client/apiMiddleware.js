const __cachedData = {}

const _cache = {
  get (url, method) {
    return __cachedData[url] && __cachedData[url][method]
  },
  set (url, method) {
    __cachedData[url] = __cachedData[url] || {}
    __cachedData[url][method] = true
  }
}

export const createApiMiddleware = (ajax, history) => {
  return store => next => action => {
    const {
      api,
      method,
      config,
      cache,
      type,
      error,
      redirect
    } = action

    if (!api) return next(action)

    if (cache && _cache.get(api + JSON.stringify(config), method)) {
      return
    } else if (cache) {
      _cache.set(api + JSON.stringify(config), method)
    }
    return ajax[method](api, config)
      .then(res => res.data)
      .then(payload => {
        next({type, payload})
        if (redirect) {
          history.push(redirect)
        }
      })
      .catch(err => {
        next({type: error, err})
      })
  }
}

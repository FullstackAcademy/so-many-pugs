const _mem = {}

const _cache = {
  get (url, method) {
    return _mem[url] && _mem[url][method]
  },
  set (url, method) {
    _mem[url] = _mem[url] || {}
    _mem[url][method] = true
  }
}

export const createApiMiddleware = (ajax, history) => {
  return store => next => action => {
    const {
      api,
      method,
      body,
      cache = false,
      types,
      success,
      error
    } = action

    if (!api) return next(action)

    const cached = _cache.get(api + JSON.stringify(body), method)
    if (cache && cached) {
      return Promise.resolve(cached)
    }

    const [LOADING, SUCCESS, ERROR] = types
    store.dispatch({type: LOADING})

    return ajax[method](api, body)
      .then(res => res.data)
      .then(payload => {
        next({type: SUCCESS, payload})
        if (cache) {
          _cache.set(api + JSON.stringify(body), method)
        }
        if (success) {
          return success({payload, ajax, history})
        }
      })
      .catch(err => {
        next({type: ERROR, err})
        if (error) {
          return error(err)
        }
      })
  }
}

export default class Cache {
  constructor () {
    this.__cache = {}
  }

  get (s) {
    return this.__cache[s]
  }

  set (s) {
    this.__cache[s] = true
  }
}

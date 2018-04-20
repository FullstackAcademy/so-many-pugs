import {byId} from '../utils'

const GOT_PUGS = 'GOT_PUGS'
const GOT_PUG = 'GOT_PUG'

const defaultPugs = {
  byId: {},
  count: 0
}

const gotPugs = pugs => ({
  type: GOT_PUGS,
  pugs
})

const gotPug = pug => ({
  type: GOT_PUG,
  pug
})

export const fetchPugs = () => (dispatch, _, {axios, cache}) => {
  const api = '/api/pugs'
  if (cache.get(api)) return
  cache.set(api)
  return axios.get(api)
    .then(res => res.data)
    .then(pugs => {
      dispatch(gotPugs(pugs))
    })
}

export const fetchPugsPaginated = () => (dispatch, getState, {axios, cache}) => {
  const {count} = getState().pugs
  const api = ['/api/pugs', {
    params: {
      page: count
    }
  }]
  const apiStr = JSON.stringify(api)
  if (cache.get(apiStr)) return
  cache.set(apiStr)
  return axios.get(...api)
    .then(res => res.data)
    .then(pugs => {
      dispatch(gotPugs(pugs))
    })
}

export const fetchPug = (pugId) => (dispatch, _, {axios, cache}) => {
  const api = `/api/pugs/${pugId}`
  if (cache.get(api)) return
  cache.set(api)
  return axios.get(api)
    .then(res => res.data)
    .then(pug => {
      dispatch(gotPug(pug))
    })
}

export default (state = defaultPugs, action) => {
  switch (action.type) {
    case GOT_PUGS:
      return {
        ...state,
        byId: {
          ...byId(action.pugs),
          ...state.byId
        },
        count: state.count + action.pugs.length
      }
    case GOT_PUG:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.pug.id]: action.pug
        }
      }
    default:
      return state
  }
}

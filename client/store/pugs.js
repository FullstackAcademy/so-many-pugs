import {byId} from '../utils'

const GOT_PUGS = 'GOT_PUGS'
const GOT_PUG = 'GOT_PUG'

const defaultPugs = {
  byId: {},
  count: 0
}

export const fetchPugs = () => ({
  api: '/api/pugs',
  method: 'get',
  type: GOT_PUGS,
  error: 'ERROR',
  cache: true
})

export const fetchPugsPaginated = (page = 0) => ({
  api: '/api/pugs',
  method: 'get',
  type: GOT_PUGS,
  config: {
    params: {
      page
    }
  },
  error: 'ERROR',
  cache: true
})

export const fetchPug = (pugId) => ({
  api: `/api/pugs/${pugId}`,
  method: 'get',
  type: GOT_PUG,
  error: 'ERROR',
  cache: true
})

export default (state = defaultPugs, action) => {
  switch (action.type) {
    case GOT_PUGS:
      return {
        ...state,
        byId: {
          ...byId(action.payload),
          ...state.byId
        },
        count: state.count + action.payload.length
      }
    case GOT_PUG:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload
        }
      }
    default:
      return state
  }
}

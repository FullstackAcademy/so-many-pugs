const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

const defaultUser = {}

export const me = () => ({
  type: GET_USER,
  error: 'ERROR',
  api: '/auth',
  method: 'get',
  cache: false
})

export const auth = (credentials, method) => ({
  type: GET_USER,
  error: 'ERROR',
  api: '/auth/local',
  config: credentials,
  method,
  cache: false,
  redirect: '/home'
})

export const logout = () => ({
  type: REMOVE_USER,
  error: 'ERROR',
  api: '/auth',
  method: 'delete',
  cache: false
})

export default (state = defaultUser, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}

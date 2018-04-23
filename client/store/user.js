const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

const defaultUser = {}

export const me = () => ({
  types: ['LOADING_USER', GET_USER, 'ERROR'],
  error: 'ERROR',
  api: '/auth',
  method: 'get'
})

export const auth = (credentials, method) => ({
  types: ['LOADING_USER', GET_USER, 'ERROR'],
  api: '/auth/local',
  body: credentials,
  method,
  success: ({history}) => history.push('/home')
})

export const logout = () => ({
  types: ['LOADING_USER', REMOVE_USER, 'ERROR'],
  api: '/auth',
  method: 'delete'
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

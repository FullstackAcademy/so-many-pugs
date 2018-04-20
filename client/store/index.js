import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import axios from 'axios'
import history from '../history'
import user from './user'
import pugs from './pugs'
import {createApiMiddleware} from '../apiMiddleware'

const reducer = combineReducers({user, pugs})
const api = createApiMiddleware(axios, history)

const store = createStore(
  reducer,
  applyMiddleware(
    api,
    logger
  )
)

export default store

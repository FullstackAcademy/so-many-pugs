import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'
import history from '../history'
import Cache from '../cache'
import user from './user'
import pugs from './pugs'

const cache = new Cache()
const reducer = combineReducers({user, pugs})

const store = createStore(
  reducer,
  applyMiddleware(
    thunks.withExtraArgument({axios, history, cache}),
    logger
  )
)

export default store

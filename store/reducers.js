import { combineReducers } from 'redux'
import { SESSION_STATE } from '../modules/session/constants'
import { sessionReducer } from '../modules/session/reducers'

export default asyncReducers =>
  combineReducers({
    [SESSION_STATE]: sessionReducer,
    ...asyncReducers,
  })

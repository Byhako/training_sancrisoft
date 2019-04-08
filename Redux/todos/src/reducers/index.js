import { combineReducers } from 'redux'

import todos from './todos'
import loading from './loading'
import goals from './goals'
import error from './error'

export default combineReducers({
  todos,
  goals,
  loading,
  error,
})

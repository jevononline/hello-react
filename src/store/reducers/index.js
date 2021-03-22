import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'
import comments from './comments'

const todoApp = combineReducers({
  // todos,
  // visibilityFilter,
  comments
})

export default todoApp
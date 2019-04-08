import API from 'goals-todos-api'
import { addTodo, removeTodo, toggleTodo } from '../actions/todos'
import {showError, hideError } from '../actions/shared'

export function handleDeleteTodo (todo) {
  return dispatch => {
    dispatch(removeTodo(todo.id))
    return API.deleteTodo(todo.id)
      .catch(error => {
        dispatch(addTodo(todo))
        dispatch(showError())
        setTimeout(() => dispatch(hideError()), 2000)
        console.log(error)
      })
  }
}

export function handleAddTodo (name) {
  return dispatch => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo))
      })
      .catch(error => {
        dispatch(showError())
        setTimeout(() => dispatch(hideError()), 2000)
        console.log('toto',error)})
  }
}

export function handleToggle (id) {
  return dispatch => {
    dispatch(toggleTodo(id))

    return API.saveTodoToggle(id)
      .catch(error => {
        dispatch(toggleTodo(id))
        dispatch(showError())
        setTimeout(() => dispatch(hideError()), 2000)
        console.log('toto',error)
      })
  }
}

import API from 'goals-todos-api'
import { addGoal, removeGoal } from '../actions/goals'
import {showError, hideError } from '../actions/shared'

export function handleAddGoal (name) {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal))
      })
      .catch(error => {
        dispatch(showError)
        setTimeout(() => dispatch(hideError), 2000)
        console.log(error)})
  }
}

export function handleDeleteGoal (goal) {
  return dispatch => {
    dispatch(removeGoal(goal.id))

    return API.deleteGoal(goal.id)
      .catch(error => {
        dispatch(addGoal(goal))
        dispatch(showError)
        setTimeout(() => dispatch(hideError), 2000)
        console.log(error)
      })
  }
}

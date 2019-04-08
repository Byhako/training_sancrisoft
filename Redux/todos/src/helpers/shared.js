import API from 'goals-todos-api'
import {receiveData} from '../actions/shared'

export function handleInitialData () {
  return (dispatch) => {
    return Promise.all([
      API.fetchTodos(),
      API.fetchGoals(),
    ]).then(([ todos, goals ]) => {
      dispatch(receiveData(todos, goals))
    })
    .catch(error => console.log(error))
  }
}
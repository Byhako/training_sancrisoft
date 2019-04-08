import { savePoll } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { addPoll, receivePolls} from '../actions/polls'

export function handleAddPoll (poll) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    return savePoll({
      ...poll,
      author: authedUser
    })
      .then(poll => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()))
      .catch(error => console.log(error))
  }
}

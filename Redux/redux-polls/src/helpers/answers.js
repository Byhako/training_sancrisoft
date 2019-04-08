import { savePollAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { addAnswer } from '../actions/answers'

export function handleAddAnswer (answerData) {
  return (dispatch) => {
    dispatch(showLoading())
    return savePollAnswer(answerData)
      .then(() => dispatch(addAnswer(answerData)))
      .then(() => dispatch(hideLoading()))
  }
}

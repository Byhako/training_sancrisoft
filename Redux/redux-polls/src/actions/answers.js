export function addAnswer ({ authedUser, id, answer }) {
  return { type: 'ADD_ANSWER', authedUser, id, answer }
}

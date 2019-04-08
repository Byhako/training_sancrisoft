export function addPoll (poll) {
  return {
    type: 'ADD_POLL',
    poll,
  }
}

export function receivePolls (polls) {
  return {
    type: 'RECEIVE_POLLS',
    polls,
  }
}

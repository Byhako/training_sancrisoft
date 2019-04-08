export function receiveData (todos, goals) {
  return { type: 'RECEIVE_DATA', todos, goals }
}

export function showError () {
  console.log('showError')
  return { type: 'SHOW_ERROR_REQUIRE', show: true}
}

export function hideError () {
  console.log('hideError')
  return { type: 'HIDE_ERROR_REQUIRE', show: false }
}

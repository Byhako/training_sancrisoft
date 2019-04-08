export default function error (state = false, action) {
  switch(action.type) {
    case 'SHOW_ERROR_REQUIRE':
      console.log('reducerShow')
      return true
    case 'HIDE_ERROR_REQUIRE':
      console.log('reducerHide')
      return false
    default :
      return state
  }
}

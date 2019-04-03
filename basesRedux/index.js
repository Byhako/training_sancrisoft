// Library code
// function createStore (reducer) {
//   // The store should have four parts
//   // 1. The state
//   // 2. Get the state. (getState)
//   // 3. Listen to changes on the state. (subscribe)
//   // 4. Update the state (dispatch)

//   let state
//   let listeners = []

//   const getState = () => state

//   const subscribe = (listener) => {
//     listeners.push(listener)
//     return () => {
//       listeners = listeners.filter((l) => l !== listener)
//     }
//   }

//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach((listener) => listener())
//   }

//   return {
//     getState,
//     subscribe,
//     dispatch,
//   }
// }



// App Code
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'
const RECEIVE_DATA = 'RECEIVE_DATA'

function addTodoAction (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeTodoAction (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

function toggleTodoAction (id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

function addGoalAction (goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}

function removeGoalAction (id) {
  return {
    type: REMOVE_GOAL,
    id,
  }
}

function receiveDataAction (todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  }
}


//  =================  Acciones asincronas  ========================
function handleDeleteTodo (todo) {
  return dispatch => {
    dispatch(removeTodoAction(todo.id))
    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodoAction(todo))
        alert('Error. Try again.')
      })
  }
}

function handleAddTodo (name, cb) {
  return dispatch => {
    API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodoAction(todo))
        cb()
      })
      .catch(() => alert('Error. Try again.'))
  }
}

function handleToggle (id) {
  return dispatch => {
    dispatch(toggleTodoAction(id))
    return API.saveTodoToggle(id)
      .catch(() => {
        dispatch(toggleTodoAction(id))
        alert('Error. Try again.')
      })
  }
}

function handleDeleteGoal (goal) {
  return dispatch => {
    dispatch(removeGoalAction(goal.id))
    return API.deleteGoal(goal.id)
      .catch(() => {
        dispatch(addGoalAction(Goal))
        alert('Error. Try again.')
      })
  }
}

function handleAddGoal (name, cb) {
  return dispatch => {
    API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoalAction(goal))
        cb()
      })
      .catch(() => alert('Error. Try again.'))
  }
}

function handleInitialData () {
  return dispatch => {
    return Promise.all([
      API.fetchTodos(),
      API.fetchGoals(),
    ]).then(([ todos, goals ]) => {
      dispatch(receiveDataAction(todos, goals))
    })
  }
}

// ==============  MIDDLEWARES  ===========================
const checker = () => next => action => {
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().indexOf('bitcoin') !== -1
  ) {
    return alert("Nope. That's a bad ImageData.")
  }
  
  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().indexOf('bitcoin') !== -1
  ) {
    return alert("Nope. That's a bad ImageData.")
  }
  
  return next(action)
}

const logger = store => next => action => {
  console.group(action.type)
  console.log('The action: ', action)
  const result = next(action)
  console.log('The new state: ', store.getState())
  console.groupEnd()
  return result
}

// THUNK
// const thunk = store => next => action => {
//   if (typeof action === 'function') {
//     return action(store.dispatch)
//   }

//   return next(action)
// }

// ==================  Reducer function  ====================
function todos (state = [], action) {
  switch(action.type) {
    case ADD_TODO :
      return state.concat([action.todo])
    case REMOVE_TODO :
      return state.filter((todo) => todo.id !== action.id)
    case TOGGLE_TODO :
      return state.map((todo) => todo.id !== action.id ? todo :
        Object.assign({}, todo, {complete: !todo.complete})
      )
    case RECEIVE_DATA :
      return action.todos
    default :
      return state
  }
}


function goals (state = [], action) {
  switch(action.type) {
    case ADD_GOAL :
      return state.concat([action.goal])
    case REMOVE_GOAL :
      return state.filter((goal) => goal.id !== action.id)
    case RECEIVE_DATA :
      return action.goals
    default :
      return state
  }
}


function loading (state = true, action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return false
    default :
      return state
  }
}


// function app (state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     goals: goals(state.goals, action)
//   }
// }

// const store = Redux.createStore(app)
const store = Redux.createStore(Redux.combineReducers({
  todos,
  goals,
  loading,
}), Redux.applyMiddleware(checker, logger, ReduxThunk.default))

store.subscribe(() => {
  const { goals, todos } = store.getState()

  console.log('goals', goals)
  console.log('todos', todos)

  document.getElementById('goals').innerHTML = ''
  document.getElementById('todos').innerHTML = ''

  goals.forEach(addGoalToDom)
  todos.forEach(addTodoToDom)
})

// ===================================================================
function addTodoToDom (todo) {
  const node = document.createElement('li')
  const text = document.createTextNode(todo.name)

  const removeBtn = createRemoveButton (() => {
    store.dispatch(removeTodoAction(todo.id))
  })

  node.appendChild(text)
  node.appendChild(removeBtn)
  node.style.cursor = 'pointer'
  node.style.textDecoration = todo.complete ? 'line-through' : 'none'
  node.addEventListener('click', () => {
    store.dispatch(toggleTodoAction(todo.id))
  })

  document.getElementById('todos')
    .appendChild(node)
}


function addGoalToDom (goal) {
  const node = document.createElement('li')
  const text = document.createTextNode(goal.name)

  const removeBtn = createRemoveButton (() => {
    store.dispatch(removeGoalAction(goal.id))
  })

  node.appendChild(text)
  node.appendChild(removeBtn)

  document.getElementById('goals')
    .appendChild(node)
}


// ====================  DOM  code  ===========================
function generateId () {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}


function createRemoveButton (onClick) {
  const removerBtn = document.createElement('button')
  removerBtn.innerHTML = 'X'
  removerBtn.addEventListener('click', onClick)

  return removerBtn
}


function addTodo () {
  const input = document.getElementById('todo')
  const name = input.value
  input.value = ''

  store.dispatch(addTodoAction({
    id: generateId(),
    name,
    complete: false
  }))
}

function addGoal () {
  const input = document.getElementById('goal')
  const name = input.value
  input.value = ''

  store.dispatch(addGoalAction({
    id: generateId(),
    name
  }))

}

document.getElementById('todoBtn')
  .addEventListener('click', addTodo)

document.getElementById('goalBtn')
  .addEventListener('click', addGoal)
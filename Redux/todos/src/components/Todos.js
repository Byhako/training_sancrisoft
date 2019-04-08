import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from '../helpers/todos'

class Todos extends React.Component {
  state = {
    inputTodos: ''
  }
  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddTodo(this.state.inputTodos))
    this.setState({inputTodos: ''})
  }
  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))
  }
  toggleItem = (id) => {
    this.props.dispatch(handleToggle(id))
  }

  handleInput = e => this.setState({inputTodos: e.target.value})

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type='text'
          placeholder='Add Todo'
          value={this.state.inputTodos}
          onChange={this.handleInput}
        />
        <button onClick={this.addItem}>Add Todo</button>

        <List
          toggle={this.toggleItem}
          items={this.props.todos}
          remove={this.removeItem}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos)

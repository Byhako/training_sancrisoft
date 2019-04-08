import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddGoal,
  handleDeleteGoal
} from '../helpers/goals'

class Goals extends React.Component {
  state = {
    inputGoals: ''
  }

  addItem = (e) => {
    e.preventDefault()  

    this.props.dispatch(handleAddGoal(this.state.inputGoals))
    this.setState({inputGoals: ''})
  }
  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal))
  }

  handleInput = e => this.setState({inputGoals: e.target.value})

  render() {
    return (
      <div>
        <h1>Goals</h1>
        <input
          type='text'
          placeholder='Add Goal'
          value={this.state.inputGoals}
          onChange={this.handleInput}
        />
        <button onClick={this.addItem}>Add Goal</button>

        <List
          items={this.props.goals}
          remove={this.removeItem}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  goals: state.goals
}))(Goals)

import React from 'react'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { connect } from 'react-redux'
import { handleInitialData } from '../helpers/shared'

class App extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    const { loading, error } = this.props
    if (loading === true) {
      return <h3>Loading</h3>
    }

    return (
      <div>
        {error && 
          <p className='error'>Tarea no ejecutada, intenta de nuevo.</p>
        }
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading,
  error: state.error
}))(App)

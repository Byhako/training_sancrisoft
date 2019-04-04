import React, { Component, Fragment } from 'react'
import serializeForm from 'form-serialize'

import Nav from './Nav'
import Home from './Home'
import Results from './Results'

class App extends Component {

  state = {
    inputNav: '',
    input: '',
    search: false,
    city: ''
  }

  toHome = () => this.setState({search: false, city: ''})

  handleSearch = e => {
    e.preventDefault()
    const { city } = serializeForm(e.target, { hash: true })
    document.getElementById("form-nav").reset()
    if (city) {
      this.setState({city, search: true, input: '', inputNav: ''})
    }
  }

  handleChange1 = e => this.setState({inputNav: e.target.value})
  handleChange2 = e => this.setState({input: e.target.value})

  render () {
    const { search, city, inputNav, input } = this.state
    return (
      <Fragment>
        <Nav
          search={this.handleSearch}
          toHome={this.toHome}
          input={inputNav}
          change={this.handleChange1}
        />
        {search ? (
          <Results city={city}/>
        ) : (
          <Home
            search={this.handleSearch}
            input={input}
            change={this.handleChange2}
          />
        )}
      </Fragment>
    )
  }
}

export default App

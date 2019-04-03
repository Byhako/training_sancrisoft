import React, { Component, Fragment } from 'react'
import serializeForm from 'form-serialize'

import Nav from './Nav'
import Home from './Home'
import Results from './Results'

class App extends Component {

  state = {
    search: false,
    city: ''
  }

  toHome = () => this.setState({search: false, city: ''})

  handleSearch = (e) => {
    e.preventDefault()
    const { city } = serializeForm(e.target, { hash: true })
    document.getElementById("form-nav").reset()
    if (city) {
      this.setState({city, search: true})
    }
  }

  clickButton = () => {
    
  }

  render () {
    const { search, city } = this.state
    return (
      <Fragment>
        <Nav search={this.handleSearch} toHome={this.toHome} clickButton={this.clickButton}/>
        {search ? (
          <Results city={city}/>
        ) : (
          <Home search={this.handleSearch} />
        )}
      </Fragment>
    )
  }
}

export default App

import React, { Component, Fragment } from 'react'
import serializeForm from 'form-serialize'
import { Redirect } from 'react-router-dom'


import Nav from './Nav'
import Home from './Home'

class App extends Component {

  state = {
    inputNav: '',
    inputHome: '',
    search: false,
    city: ''
  }

  toHome = () => this.setState({search: false, city: ''})

  handleSearch = e => {
    e.preventDefault()
    const { city } = serializeForm(e.target, { hash: true })
    if (city) {
      this.setState({city, search: true, inputHome: '', inputNav: ''})
    }
  }

  changeCityNav = e => this.setState({inputNav: e.target.value})
  changeCityHome = e => this.setState({inputHome: e.target.value})

  render () {
    const { search, city, inputNav, inputHome } = this.state
    return (
      <Fragment>
        <Nav
          onSearch={this.handleSearch}
          toHome={this.toHome}
          cityValue={inputNav}
          onChangeCity={this.changeCityNav}
        />
        {search ? (
          <Redirect
            to={{pathname: `/results/${city}`}}
          />
        ) : (
          <Home
            onSearch={this.handleSearch}
            cityValue={inputHome}
            onChangeCity={this.changeCityHome}
          />
        )}
      </Fragment>
    )
  }
}

export default App

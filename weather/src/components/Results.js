import React, { Component, Fragment } from 'react'
import moment from 'moment'
import Nav from './Nav'

import '../styles/results.css'

// https://api.openweathermap.org/data/2.5/weather?q=George&type=accurate&APPID=669f0bb2eac389fb3e10ffa33df052a7


class Results extends Component {
  constructor (props) {
    super(props)
    this.apiKey = '92fdcd3bea8647c0611c570cca6ef5a1'
    this.city = props.match.params.city

    this.state = {
      title: 'Loading',
      list: [],
      showData: false,
      showDetails: false,
      index: null,
      city: props.match.params.city,
      inputNav: '',
      search: false
    }
  }

  handleResponse = (response) => {
    return response.json().then(json => {
      return response.ok ? json : Promise.reject(json)
    })
  }

  componentDidMount () {
    this.getResults(this.state.city)
  }

  getResults = (city) => {
    console.log(city)
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${this.apiKey}&units=metric&cnt=5`

    fetch(url)
      .then(this.handleResponse)
      .then(data => {
        this.setState({title: city, showData: true, list: data.list })
      })
      .catch(error => {
        this.setState({title: `${city} not found.`})
      })
  }

  getIcon = item => {
    const name = item.weather[0].icon
    return `http://openweathermap.org/img/w/${name}.png`
  }

  convertDate = date => {
    return moment.unix(date).format('"dddd, MMMM D"').replace(/['"]+/g, '')
  }

  showDetails = e => {
    const index = e.target.dataset.index
    this.setState({showData: false, showDetails: true, index})
  }

  changeCityNav = e => this.setState({inputNav: e.target.value})
  toHome = () => this.setState({search: false, city: ''})

  handleSearch = e => {
    e.preventDefault()
    const city = this.state.inputNav
    if (city) {
      this.setState({city, inputNav: ''}, this.getResults(city))
    }
  }

  handleSearchDetails = e => {
    e.preventDefault()
    const city = this.state.inputNav
    if (city) {
      this.setState({city, inputNav: '', showDetails: false}, this.getResults(city))
    }
  }


  render () {
    const { title, showData, inputNav, list, showDetails, index } = this.state

    if (showDetails) {
      const data = list[index]
      return (
        <Fragment>
          <Nav
            onSearch={this.handleSearchDetails}
            toHome={this.toHome}
            cityValue={inputNav}
            onChangeCity={this.changeCityNav}
          />
          <div className="details">
            <img src={this.getIcon(data)} alt="icon" />
            <h2 className="date">{this.convertDate(data.dt)}</h2>

            <div className="more-details">
              <p className='city-name'>{this.state.city}</p>
              <p>{data.weather[0].description}</p>
              <p>min temp: {data.temp.min} degrees</p>
              <p>max temp: {data.temp.max} degrees</p>
              <p>humidity: {data.humidity}</p>
            </div>
          </div>
        </Fragment>
      )
    }

    return (
      <Fragment>
          <Nav
            onSearch={this.handleSearch}
            toHome={this.toHome}
            cityValue={inputNav}
            onChangeCity={this.changeCityNav}
          />
          <div className="results">
            <h1 className='title'>{title}</h1>
            <div className="data">
              {showData &&
                list.map((item, index) => (
                  <div
                    key={index}
                    className="card"
                    data-index={index}
                    onClick={this.showDetails}
                  >
                    <img src={this.getIcon(item)} alt="icon"  data-index={index}/>
                    <h2 className="date" data-index={index}>{this.convertDate(item.dt)}</h2>
                  </div>
                ))
              }
            </div>
          </div>
      </Fragment>
    )
  }
}

export default Results

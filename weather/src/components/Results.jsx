import React, { Component } from 'react'
import moment from 'moment'

import '../styles/results.css'

// https://api.openweathermap.org/data/2.5/weather?q=George&type=accurate&APPID=669f0bb2eac389fb3e10ffa33df052a7


class Results extends Component {
  constructor (props) {
    super(props)
    this.apiKey = '92fdcd3bea8647c0611c570cca6ef5a1'

    this.state = {
      title: 'Loading',
      list: [],
      showData: false,
      showDetails: false,
      index: null,
      city: null
    }
  }

  handleResponse = (response) => {
    return response.json().then(json => {
      return response.ok ? json : Promise.reject(json)
    })
  }

  componentDidMount () {
    this.getResults()
  }

  componentWillUpdate (prevProps) {
    if (this.state.city !== prevProps.city) {
      this.setState({city: prevProps.city, showDetails: false})
      this.getResults()
    }
  }

  getResults = () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.props.city}&type=accurate&APPID=${this.apiKey}&units=metric&cnt=5`

    fetch(url)
      .then(this.handleResponse)
      .then(data => {
        this.setState({title: data.city.name, showData: true, list: data.list, city: this.props.city})
      })
      .catch(error => {
        console.log(error)
        this.setState({title: `${this.props.city} not found.`})
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
    this.setState({showData: false, showDetails: true, index, city: null})
  }


  render () {
    const { title, showData, list, showDetails, index } = this.state

    if (showDetails) {
      const data = list[index]
      return (
        <div className="details">
          <img src={this.getIcon(data)} alt="icon" />
          <h2 className="date">{this.convertDate(data.dt)}</h2>

          <div className="more-details">
            <p>{this.props.city}</p>
            <p>{data.weather[0].description}</p>
            <p>min temp: {data.temp.min} degrees</p>
            <p>max temp: {data.temp.max} degrees</p>
            <p>humidity: {data.humidity}</p>
          </div>
        </div>
      )
    }

    return (
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
    )
  }
}

export default Results

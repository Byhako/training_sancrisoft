import React from 'react'
import Form from './Form'
import '../styles/home.css'

const Home = ({ onSearch, cityValue, onChangeCity }) => {
  return (
    <div className='container'>
      <h1>Entre a City and State</h1>
      <Form
        classFrom="form-home"
        onSearch={onSearch}
        onChangeCity={onChangeCity}
        cityValue={cityValue}
      />
    </div>
  )
}

export default Home

import React from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Nav = ({ onSearch, toHome, cityValue, onChangeCity }) => {
  return (
    <nav className="navbar">
      <Link to='/' onClick={toHome}>
        <h1 className="logo">Weather API</h1>
      </Link>
      <Form
        classFrom="form-nav"
        onSearch={onSearch}
        onChangeCity={onChangeCity}
        cityValue={cityValue}
      />
    </nav>
  )
}

export default Nav

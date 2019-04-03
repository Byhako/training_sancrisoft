import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

function Nav ({ search, toHome, clickButton }) {
  return (
    <nav className="navbar">
      <Link to='/' onClick={toHome}>
        <h1 className="logo">Weather API</h1>
      </Link>
      <form onSubmit={search} className="form-nav" id='form-nav'>
        <input type="text" name='city' placeholder='St. George, Utah' />
        <button className='btn' onClick={clickButton}>Get Weather</button>
      </form>
    </nav>
  )
}

export default Nav

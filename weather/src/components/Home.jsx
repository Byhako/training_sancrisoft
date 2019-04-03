import React from 'react'
import '../styles/home.css'

function Home ({ search }) {
  return (
    <div className='container'>
      <h1>Entre a City and State</h1>
      <form onSubmit={search}>
        <input type="text" name='city' placeholder='St. George, Utah' />
        <button className='btn'>Get Weather</button>
      </form>
    </div>
  )
}

export default Home

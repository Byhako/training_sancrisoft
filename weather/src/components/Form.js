import React from 'react'

const Form = ({onSearch, onChangeCity, cityValue, classFrom}) => {
  return (
    <form onSubmit={onSearch} className={classFrom} action={'mama'}>
      <input
        type="text"
        name='city'
        placeholder='St. George, Utah'
        value={cityValue}
        onChange={onChangeCity}
      />
      <button className='btn' >Get Weather</button>
    </form>
  )
}

export default Form

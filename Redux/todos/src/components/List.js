import React from 'react'

const WrapperButton = ({ item, fn }) => {
  const handleClick = () => {
      fn(item)
  }
  return (
      <button onClick={handleClick}>X</button>
  )
}


const WrapperSpan= ({ item, fn, style }) => {
  const handleClick = () => {
      fn(item.id)
  }
  return (
      <span 
        style={style}
        onClick={fn && handleClick}
      >{item.name}</span>
  )
}


const List = props => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <WrapperSpan
            item={item} fn={props.toggle}
            style={{textDecoration: item.complete ? 'line-through' : 'none'}}
          />
          <WrapperButton item={item} fn={props.remove} />
        </li>
      ))}
    </ul>
  )
}

export default List

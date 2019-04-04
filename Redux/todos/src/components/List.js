import React from 'react'

const WrapperButton = ({ item, fn }) => {
  const handleClick = () => {
      fn(item)
  }
  return (
      <button onClick={handleClick}>X</button>
  )
}

const List = props => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span
            onClick={() => props.toggle && props.toggle(item.id)}
            style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
              {item.name}
          </span>
          <WrapperButton item={item} fn={props.remove} />
        </li>
      ))}
    </ul>
  )
}

export default List

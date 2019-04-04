import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const WrapperButton = ({ contact, fn }) => {
  const handleClick = () => {
    fn(contact)
  }
  return (
    <button className="contact-remove" onClick={handleClick}>remove</button>
  )
}

class ListContacts extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }

  clearQuery = () => this.updateQuery('')

  handleInput = e => this.updateQuery(e.target.value)

  render () {
    const { contacts, onDeleteContact } = this.props
    const { query } = this.state

    const showContacts = query === ''
      ? contacts
      : contacts.filter(c => (
        c.name.toLowerCase().includes(query.toLowerCase())
      ))

    return (
      <div className="list-contacts">

        <div className="list-contacts-top">
          <input
            type="text"
            className="search-contacts"
            placeholder='Search Contacts'
            value={query}
            onChange={this.handleInput}
          />
          <Link
            to='/create'
            className='add-contact'
          >Add Contact
          </Link>
        </div>

        {showContacts.length !== contacts.length && 
          <div className='showing-contacts' >
            <span>Now showing {showContacts.length} of {contacts.length}</span>
            <button onClick={this.clearQuery} >Show all</button>
          </div>
        }

        <ol className='contact-list'>
          {showContacts.map((contact, index) => (
            <li key={index} className='contact-list-item'>
              <div
                className="contact-avatar"
                style={{backgroundImage: `url(${contact.avatarURL})`}}
              ></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <WrapperButton contact={contact} fn={onDeleteContact} />
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}


export default ListContacts

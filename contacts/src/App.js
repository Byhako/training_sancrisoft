import React, { Component, Fragment } from 'react'
import ListContacts from './ListContacts'
import { getAll, remove, create } from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount () {
    getAll ()
      .then(contacts => this.setState({contacts}))
  }

  removeContact = (contact) => {
    this.setState(currenState => ({
      contacts: currenState.contacts.filter( c => c.id !== contact.id )
    }))
    remove(contact)
  }

  createContact = (contact) => {
    create(contact)
      .then(contact => {
        this.setState(currenState => ({
          contacts: currenState.contacts.concat([contact])
        }))
      })
  }

  render() {
    const { contacts } = this.state
    const List = () => (
      <ListContacts
        contacts={contacts}
        onDeleteContact = {this.removeContact}
      />
    )
    const create = ({ history }) => (
      <CreateContact
        onCreateContact={contact => {
          this.createContact(contact)
          history.push('/')
        }}
      />
    )

    return (
      <Fragment>
        <Route exact path='/' component={List} />
        <Route path='/create' component={create} />
      </Fragment>
    );
  }
}

export default App

import React, { Component, Fragment } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount () {
    ContactsAPI.getAll ()
      .then(contacts => this.setState({contacts}))
  }

  removeContact = (contact) => {
    this.setState(currenState => ({
      contacts: currenState.contacts.filter( c => c.id !== contact.id )
    }))
    ContactsAPI.remove(contact)
  }

  createContact = (contact) => {
    console.log(contact)
    ContactsAPI.create(contact)
      .then(contact => {
        this.setState(currenState => ({
          contacts: currenState.contacts.concat([contact])
        }))
      })
  }

  render() {
    const { contacts } = this.state
    return (
      <Fragment>
        <Route exact path='/' render={() => (
          <ListContacts
            contacts={contacts}
            onDeleteContact = {this.removeContact}
          />
          )}
        />
        <Route path='/create' render={({ history }) => (
          <CreateContact
            onCreateContact={contact => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )} />
      </Fragment>
    );
  }
}

export default App

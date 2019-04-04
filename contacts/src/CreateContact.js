import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImagenInput'
import serializeForm from 'form-serialize'

import anonimo from './anonimus.png'

class CreateContact extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if (!values.avatarURL) {
      console.log(values)
      values['avatarURL'] = anonimo
    }
    if (this.props.onCreateContact) {

      this.props.onCreateContact(values)
    }
  }

  render () {
    return (
      <div>
        <Link
          className='close-create-contact'
          to='/'
        >close
        </Link>
        <form onSubmit={this.handleSubmit} className='create-contact-form' >
          <ImageInput
            className='create-contact-avatar-input'
            name='avatarURL'
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name='name' placeholder='Name' />
            <input type="text" name='email' placeholder='Email' />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateContact
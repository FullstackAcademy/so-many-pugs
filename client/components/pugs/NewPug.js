import React from 'react'
import {connect} from 'react-redux'
import {Form, Input} from '../forms'
import {addPug} from '../../store/pugs'

const AddPug = ({handleSubmit}) => (
  <Form onSubmit={handleSubmit}>
    <Input type='text' label='Name' name='name' required />
    <Input type='textarea' label='Biography' name='biography' required />
    <button type='submit'>Submit</button>
  </Form>
)

const mapDispatch = dispatch => ({
  handleSubmit (evt) {
    evt.preventDefault()
    const name = evt.target.name.value
    const biography = evt.target.biography.value
    dispatch(addPug({name, biography}))
  }
})

export default connect(null, mapDispatch)(AddPug)

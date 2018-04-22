import React from 'react'
import {connect} from 'react-redux'
import {Form, Input} from '../forms'
import {addPug, updatePug} from '../../store/pugs'

const PugForm = ({handleSubmit}) => (
  <Form onSubmit={handleSubmit}>
    <Input type='text' label='Name' name='name' required />
    <Input type='textarea' label='Biography' name='biography' required />
    <button type='submit'>Submit</button>
  </Form>
)

const forAddPug = dispatch => ({
  handleSubmit (evt) {
    evt.preventDefault()
    const name = evt.target.name.value
    const biography = evt.target.biography.value
    dispatch(addPug({name, biography}))
  }
})

const forUpdatePug = (dispatch, ownProps) => ({
  handleSubmit (evt) {
    evt.preventDefault()
    const name = evt.target.name.value
    const biography = evt.target.biography.value
    dispatch(updatePug(ownProps.match.params.pugId, {name, biography}))
  }
})

export const AddPug = connect(null, forAddPug)(PugForm)
export const UpdatePug = connect(null, forUpdatePug)(PugForm)

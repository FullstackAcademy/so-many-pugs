import React from 'react'
import {connect} from 'react-redux'
import {Form, Input} from '../forms'
import {addPug, updatePug} from '../../store/pugs'

const PugForm = ({handleSubmit, defaults}) => (
  <Form onSubmit={handleSubmit}>
    <Input type='text' label='Name' name='name' required defaultValue={defaults.name} />
    <Input type='textarea' label='Biography' name='biography' required defaultValue={defaults.biography} />
    <button type='submit'>Submit</button>
  </Form>
)

const mapDispatchForAdd = dispatch => ({
  handleSubmit (evt) {
    evt.preventDefault()
    const name = evt.target.name.value
    const biography = evt.target.biography.value
    dispatch(addPug({name, biography}))
  }
})

const mapStateForUpdate = (state, ownProps) => ({
  defaults: Object.values(state.pugs.byId).find(pug => pug.id === +ownProps.match.params.pugId)
})

const mapDispatchForUpdate = (dispatch, ownProps) => ({
  handleSubmit (evt) {
    evt.preventDefault()
    const name = evt.target.name.value
    const biography = evt.target.biography.value
    dispatch(updatePug(ownProps.match.params.pugId, {name, biography}))
  }
})

export const AddPug = connect(null, mapDispatchForAdd)(PugForm)
export const UpdatePug = connect(mapStateForUpdate, mapDispatchForUpdate)(PugForm)

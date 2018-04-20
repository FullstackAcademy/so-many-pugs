import React from 'react'
import {fetchPug} from '../../store/pugs'
import {connect} from 'react-redux'
import Load from '../Load'

const PugDetail = ({pug = {}}) => (
  <div id='pug-detail'>
    <img src={pug.imageUrl} />
    <p>{pug.name}</p>
    <p>{pug.biography}</p>
  </div>
)

const mapState = (state, ownProps) => ({
  pug: Object.values(state.pugs.byId).find(pug => pug.id === +ownProps.match.params.pugId)
})

const mapDispatch = (dispatch, ownProps) => ({
  load: () => dispatch(fetchPug(ownProps.match.params.pugId))
})

export default connect(mapState, mapDispatch)(Load(PugDetail))

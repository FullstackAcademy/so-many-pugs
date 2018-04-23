import React from 'react'
import {connect} from 'react-redux'
import {UpdatePug} from './PugForm'
import {fetchPug} from '../../store/pugs'
import {AuthRoute, AuthLink} from '../auth'
import Load from '../Load'

const PugDetail = ({pug = {}}) => (
  <div id='pug-detail'>
    <div className='row'>
      <div className='column'>
        <img src={pug.imageUrl} />
        <p>{pug.name}</p>
        <p>{pug.biography}</p>
        <AuthLink to={`/pugs/${pug.id}/update`} adminOnly>Update Pug</AuthLink>
      </div>
      <div className='fill-xy'>
        <AuthRoute path='/pugs/:pugId/update' component={UpdatePug} />
      </div>
    </div>
  </div>
)

const mapState = (state, ownProps) => ({
  pug: Object.values(state.pugs.byId).find(pug => pug.id === +ownProps.match.params.pugId)
})

const mapDispatch = (dispatch, ownProps) => ({
  load: () => dispatch(fetchPug(ownProps.match.params.pugId))
})

export default connect(mapState, mapDispatch)(Load(PugDetail))

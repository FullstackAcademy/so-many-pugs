import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {AuthLink} from '../auth'
import {fetchPugs, fetchPugsPaginated} from '../../store/pugs'
import PugItem from './PugItem'
import Load from '../Load'

const PugsList = ({pugs, paginate, page}) => (
  <ul id='pugs-list' className='row wrap'>
    <AuthLink to='/new-pug' className='column center-xy rainbow pug-link'>
      <span>Add</span>
      <span>pugs!</span>
    </AuthLink>
    {
      pugs.map(pug => <PugItem key={pug.id} pug={pug} />)
    }
    <div className='column center-xy rainbow pug-link' onClick={() => paginate(page)}>
      <span>More</span>
      <span>pugs!</span>
    </div>
  </ul>
)

const mapState = state => {
  return {
    pugs: Object.values(state.pugs.byId),
    page: state.pugs.count
  }
}

const mapDispatch = dispatch => ({
  load: () => dispatch(fetchPugs()),
  paginate: (page) => dispatch(fetchPugsPaginated(page))
})

export default connect(mapState, mapDispatch)(Load(PugsList))

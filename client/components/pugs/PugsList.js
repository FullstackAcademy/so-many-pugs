import React from 'react'
import {connect} from 'react-redux'
import {fetchPugs, fetchPugsPaginated} from '../../store/pugs'
import PugItem from './PugItem'
import Load from '../Load'

const PugsList = ({pugs, paginate, page}) => (
  <ul id='pugs-list' className='row wrap'>
    {
      pugs.map(pug => <PugItem key={pug.id} pug={pug} />)
    }
    <div id='moar-pugs' className='row center-xy' onClick={() => paginate(page)}>More pugs!</div>
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

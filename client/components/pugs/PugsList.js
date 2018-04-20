import React from 'react'
import {connect} from 'react-redux'
import {fetchPugs, fetchPugsPaginated} from '../../store/pugs'
import PugItem from './PugItem'
import Load from '../Load'

const PugsList = ({pugs, paginate, page}) => (
  <ul className='column'>
    {
      pugs.map(pug => <PugItem key={pug.id} pug={pug} />)
    }
    <button onClick={() => {
      console.log('aaaah', page)
      paginate(page)}
    }>More pugs!</button>
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

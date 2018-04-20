import React from 'react'
import {connect} from 'react-redux'
import {fetchPugs, fetchPugsPaginated} from '../../store/pugs'
import PugItem from './PugItem'
import Load from '../Load'

const PugsList = ({pugs, paginate}) => (
  <ul className='column'>
    {
      pugs.map(pug => <PugItem key={pug.id} pug={pug} />)
    }
    <button onClick={paginate}>More pugs!</button>
  </ul>
)

const mapState = state => {
  return {
    pugs: Object.values(state.pugs.byId)
  }
}

const mapDispatch = dispatch => ({
  load: () => dispatch(fetchPugs()),
  paginate: () => dispatch(fetchPugsPaginated())
})

export default connect(mapState, mapDispatch)(Load(PugsList))

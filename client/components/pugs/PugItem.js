import React from 'react'
import {Link} from 'react-router-dom'

const PugItem = ({pug}) => (
  <Link to={`/pugs/${pug.id}`} className='pug-item column center-x'>
    <img src={pug.imageUrl} />
    <div>{pug.name}</div>
  </Link>
)

export default PugItem

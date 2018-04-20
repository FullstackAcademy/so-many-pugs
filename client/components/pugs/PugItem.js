import React from 'react'
import {Link} from 'react-router-dom'

const PugItem = ({pug}) => (
  <Link to={`/pugs/${pug.id}`}>{pug.name}</Link>
)

export default PugItem

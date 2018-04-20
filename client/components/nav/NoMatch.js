import React from 'react'
import {Link} from 'react-router-dom'

// NoMatch: how did you even get here?
const NoMatch = () => (
  <div className='column'>
    <span>What the pug? How'd you get here?</span>
    <span>Let's go <Link to='/'>home</Link>.</span>
  </div>
)

export default NoMatch

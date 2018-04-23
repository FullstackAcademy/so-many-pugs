import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const mapState = (state, {adminOnly = false, ...rest}) => {
  return {
    allowed: adminOnly ? state.user.isAdmin : !!state.user.id,
    ...rest
  }
}

// AuthLink: works just like a Link, only it's smarter about
// the logged in user. Only logged in users should see these
// types of links. We could even extend this pattern to include
// other kinds of permissions as well!
export const AuthLink = ({allowed, to, children, className, id}) => {
  return allowed ? <Link to={to} className={className} id={id}>{children}</Link> : null
}

export default withRouter(connect(mapState)(AuthLink))

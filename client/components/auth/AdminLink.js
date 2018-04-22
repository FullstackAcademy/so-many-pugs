import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const mapState = (state, ownProps) => {
  return {
    isAdmin: state.user.isAdmin || false,
    ...ownProps
  }
}

export const AdminLink = ({isAdmin, to, children, className, id}) => {
  return isAdmin && <Link to={to} className={className} id={id}>{children}</Link>
}

export default withRouter(connect(mapState)(AdminLink))

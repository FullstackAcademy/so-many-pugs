import React from 'react'
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import AuthPrompt from './AuthPrompt'

const mapState = (state, {adminOnly = false, ...rest}) => {
  return {
    allowed: adminOnly ? state.user.isAdmin : !!state.user.id,
    ...rest
  }
}

// AuthRoute: works just a like a real route, except
// it's a bit smarter. If the user isn't logged in (which
// for our purposes means that state.user.id is a truthy value),
// it will instead show a prompt for the user to login.
export const AuthRoute = ({allowed, ...rest}) => {
  return allowed
    ? <Route {...rest} />
    : <Route {...rest} component={AuthPrompt} />
}

export default withRouter(connect(mapState)(AuthRoute))

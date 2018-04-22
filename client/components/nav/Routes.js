import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Home} from '../user'
import {AuthRoute, Login, Signup} from '../auth'
import NoMatch from './NoMatch'
import {PugsList, PugDetail, AddPug} from '../pugs'

const Routes = () => (
  <div className='fill-xy center-xy column'>
    <Switch>
      <Route exact path='/' component={PugsList} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <AuthRoute path='/home' component={Home} />
      <AuthRoute path='/new-pug' component={AddPug} />
      <Route exact path='/pugs' component={PugsList} />
      <Route path='/pugs/:pugId' component={PugDetail} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default Routes

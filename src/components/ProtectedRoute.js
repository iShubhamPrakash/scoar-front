import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedRoute({component: Component, ...rest}) {
  const auth = useSelector(state => state.auth)

  const token = auth.token

  return (
    <Route {...rest}  render={props => (
      token ? <Component {...props} />:
       <Redirect to={{
        pathname: '/auth',
        state: { from: props.location }
       }}/>
    )}/>
  )
}

import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import Login from './Login'
import { AuthenticationContext } from '../App'

function ProtectedRoute({children, ...rest}) {

  // Contexts
  const authentication = useContext(AuthenticationContext)

  return (
    <Route {...rest} render={() => {
        if (authentication.authenticated) {
          return children
        } else {
          return <Login />
        }
      }}
    />
  )
}

export default ProtectedRoute
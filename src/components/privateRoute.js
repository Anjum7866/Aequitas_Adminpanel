import React from 'react'
import { Navigate } from 'react-router-dom'
//import PropTypes from 'prop-types'

function PrivateRoute({ children }) {
  const users = localStorage.getItem('luckyNumber_User')
  const currentUser = JSON.parse(users)
  return <>{currentUser ? children : <Navigate to="/login" />}</>
}

export default PrivateRoute

// PrivateRoute.propTypes = {
//   children: PropTypes.any,
// }

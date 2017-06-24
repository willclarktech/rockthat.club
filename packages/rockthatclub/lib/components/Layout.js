import React from 'react'
import { registerComponent, withCurrentUser } from 'meteor/vulcan:core'

const Layout = ({
  children,
  currentUser,
}) => (
  <div
    className="wrapper"
    id="wrapper"
  >
    {currentUser ? currentUser.displayName : 'YOU ARE GUEST'}
    {children}
  </div>
)

registerComponent('Layout', Layout, withCurrentUser)

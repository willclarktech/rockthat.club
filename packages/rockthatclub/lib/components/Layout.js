import React from 'react'
import { registerComponent, withCurrentUser } from 'meteor/vulcan:core'
import { Components } from 'meteor/vulcan:core'

const Layout = ({
  children,
  currentUser,
}) => (
  <div className="wrapper" id="wrapper">

    <Components.HeadTags />

    {currentUser ? <Components.UsersProfileCheck currentUser={currentUser} documentId={currentUser._id} /> : null}

    <Components.Header />

    <div className="main">

      <Components.FlashMessages />

      {/* <Components.Newsletter /> */}

      {children}

    </div>

    <Components.Footer />

  </div>
)

registerComponent('Layout', Layout, withCurrentUser)

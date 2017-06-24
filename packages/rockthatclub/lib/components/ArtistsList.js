import React from 'react'
import { withCurrentUser } from 'meteor/vulcan:core'

const ArtistsList = ({
  currentUser
}) => (
  <div>
    Hello {currentUser ? currentUser.displayName : 'guest'}!
  </div>
)

export default withCurrentUser(ArtistsList)

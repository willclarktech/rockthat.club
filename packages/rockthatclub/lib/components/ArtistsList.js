import React from 'react'
import { withCurrentUser, withList } from 'meteor/vulcan:core'
import Artists from '../modules/artists/collection'

const ArtistsList = ({
  currentUser
}) => (
  <div>
    Hello {currentUser ? currentUser.displayName : 'guest'}!
  </div>
)

const options = {
  collection: Artists,
  fragmentName: 'ArtistsItemFragment',
  limit: 5,
}

export default withList(options)(withCurrentUser(ArtistsList))

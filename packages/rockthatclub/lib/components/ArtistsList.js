import React from 'react'
import { withCurrentUser, withList } from 'meteor/vulcan:core'
import Artists from '../modules/artists/collection'

const ArtistsList = ({
  currentUser,
  results = [],
  loading,
}) => (
  <div>
    Hello {currentUser ? currentUser.displayName : 'guest'}!
    {results.map(artist => artist.name)}
  </div>
)

const options = {
  collection: Artists,
  fragmentName: 'ArtistsItemFragment',
  limit: 5,
}

export default withCurrentUser(ArtistsList)

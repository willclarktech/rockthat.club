import React from 'react'
import { withCurrentUser, withList } from 'meteor/vulcan:core'
import Posts from '../modules/posts/collection'

const PostsList = ({
  currentUser,
  results = [],
  loading,
}) => (
  <div>
    Hello {currentUser ? currentUser.displayName : 'guest'}!
    {results.map(post => post.name)}
  </div>
)

const options = {
  collection: Posts,
  fragmentName: 'PostsItemFragment',
  limit: 5,
}

export default withList(options)(withCurrentUser(PostsList))

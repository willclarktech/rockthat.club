import React from 'react'
import { Components, withCurrentUser, withList } from 'meteor/vulcan:core'
import Posts from '../modules/posts/collection'

const PostsList = ({
  currentUser,
  results = [],
  loading,
}) => (
  <div>
    <Components.PostsListHeader />
    <div className="posts-list-content">
      {results.map(post => (
        <Components.PostsItem
          key={post._id}
          post={post}
        />
      ))}
    </div>
  </div>
)

const options = {
  collection: Posts,
  fragmentName: 'PostsItemFragment',
  limit: 5,
}

export default withList(options)(withCurrentUser(PostsList))

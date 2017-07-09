import { registerFragment } from 'meteor/vulcan:core'

registerFragment(`
  fragment PostsItemFragment on Post {
    _id
    title
    postedAt
    url
    slug
  }
`)

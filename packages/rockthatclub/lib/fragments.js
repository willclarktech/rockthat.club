import { extendFragment, registerFragment } from 'meteor/vulcan:core';

extendFragment('PostsPage', `
	soundcloud
  canBring
  minimumCharge
`);

registerFragment(`
  fragment PostsList on Post {
    # posts
    _id
    title
    # url - removed
    slug
    postedAt
    createdAt
    sticky
    status
    excerpt
    viewCount
    clickCount
    # users
    userId
    user {
      ...UsersMinimumInfo
    }
    # embedly
    thumbnailUrl
    # categories
    categories {
      ...CategoriesMinimumInfo
    }
    # comments
    commentCount
    commenters {
      ...UsersMinimumInfo
    }
    # voting
    currentUserVotes{
      ...VoteFragment
    }
    baseScore
    score
    # custom
  	soundcloud
    canBring
    minimumCharge
  }
`);

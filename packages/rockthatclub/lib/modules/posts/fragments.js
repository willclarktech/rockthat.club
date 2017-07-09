// import { registerFragment } from 'meteor/vulcan:core'

// registerFragment(`
//   fragment PostsItemFragment on Post {
//     _id
//     title
//     postedAt
//     slug
//   }
// `)
//
// registerFragment(`
//   fragment PostsList on Post {
//     # vulcan:posts
//     _id
//     title
//     slug
//     postedAt
//     createdAt
//     sticky
//     status
//     body
//     htmlBody
//     excerpt
//     viewCount
//     clickCount
//     # vulcan:users
//     userId
//     user {
//       ...UsersMinimumInfo
//     }
//     # vulcan:embedly
//     thumbnailUrl
//     # vulcan:categories
//     categories {
//       ...CategoriesMinimumInfo
//     }
//     # vulcan:comments
//     commentCount
//     commenters {
//       ...UsersMinimumInfo
//     }
//     # vulcan:voting
//     upvoters {
//       _id
//     }
//     downvoters {
//       _id
//     }
//     upvotes
//     downvotes
//     baseScore
//     score
//   }
// `);

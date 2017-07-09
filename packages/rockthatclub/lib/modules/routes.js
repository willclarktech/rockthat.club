import { addRoute } from 'meteor/vulcan:core'

addRoute({
  name: 'posts',
  path: '/',
  componentName: 'PostsHome',
})

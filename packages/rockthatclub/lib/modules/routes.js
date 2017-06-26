import { addRoute } from 'meteor/vulcan:core'
import { PostsList } from '../components'

addRoute({
  name: 'posts',
  path: '/',
  component: PostsList,
})

import { addRoute } from 'meteor/vulcan:core'
import { ArtistsList } from '../components'

addRoute({
  name: 'artists',
  path: '/',
  component: ArtistsList,
})

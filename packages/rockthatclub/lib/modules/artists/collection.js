import { createCollection } from 'meteor/vulcan:core'
import schema from './schema'
import resolvers from './resolvers'
import './fragments'

const Artists = createCollection({
  collectionName: 'Artists',
  typeName: 'Artist',
  schema,
  resolvers,
})

export default Artists

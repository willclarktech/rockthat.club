import { createCollection } from 'meteor/vulcan:core'
import schema from './schema'
import './fragments'

const Artists = createCollection({
  collectionName: 'Artists',
  typeName: 'Artist',
  schema,
})

export default Artists

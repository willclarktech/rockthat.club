import { registerFragment } from 'meteor/vulcan:core'

registerFragment(`
  fragment ArtistsItemFragment on Artist {
    _id
    createdAt
    name
  }
`)

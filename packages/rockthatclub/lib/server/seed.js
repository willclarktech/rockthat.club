import { newMutation } from 'meteor/vulcan:core'
import Users from 'meteor/vulcan:users'
import Artists from '../modules/artists/collection'

const seedData = [
  {
    name: 'Led Zeppelin',
  },
  {
    name: 'Dolly Parton',
  },
  {
    name: 'Flying Lotus',
  },
]

Meteor.startup(function() {
  const user = {
    username: 'admin',
    email: 'admin@rockthat.club',
    password: 'password',
  }
  if (!Users.find().fetch().length) {
    newMutation({
      collection: Users,
      document: user,
      validate: false,
    })
  }
  const currentUser = Users.findOne()
  if (!Artists.find().fetch().length) {
    seedData.forEach(artist => newMutation({
      action: 'artists.new',
      collection: Artists,
      document: artist,
      currentUser,
      validate: false,
    }))
  }
})

import { newMutation } from 'meteor/vulcan:core'
import Users from 'meteor/vulcan:users'
import Posts from '../modules/posts/collection'

const seedData = [
  {
    title: 'Led Zeppelin',
    url: 'http://www.ledzeppelin.com/',
  },
  {
    title: 'Dolly Parton',
    url: 'https://dollyparton.com/',
  },
  {
    title: 'Flying Lotus',
    url: 'http://www.flying-lotus.com/',
  },
]

Meteor.startup(function() {
  console.info('// Creating dummy posts')
  const demoUser = {
    username: 'DemoUser',
    email: 'demo@user.com',
    profile: {
      isDummy: true,
    },
  }
  if (!Users.find().fetch().length) {
    newMutation({
      collection: Users,
      document: demoUser,
      validate: false,
    })
  }
  const currentUser = Users.findOne()
  if (!Posts.find().fetch().length) {
    seedData.forEach(post => newMutation({
      action: 'posts.new',
      collection: Posts,
      document: post,
      currentUser,
      validate: false,
    }))
  }
  console.log(Posts.find().fetch())
})

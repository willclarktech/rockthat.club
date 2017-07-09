import { newMutation } from 'meteor/vulcan:core'
import Users from 'meteor/vulcan:users'
import Posts from '../modules/posts/collection'

const seedData = [
  {
    title: 'Led Zeppelin',
    thumbnailUrl: 'https://pbs.twimg.com/profile_images/2585954566/8ev9krfvkxb8nz00cg77_400x400.jpeg',
    // url: 'http://www.ledzeppelin.com/',
  },
  {
    title: 'Dolly Parton',
    thumbnailUrl: 'https://pbs.twimg.com/profile_images/751068635297447936/9b2iGzv7_400x400.jpg',
    // url: 'https://dollyparton.com/',
  },
  {
    title: 'Flying Lotus',
    thumbnailUrl: 'https://pbs.twimg.com/profile_images/819979189231054848/DPZuZq3z_400x400.jpg',
    // url: 'http://www.flying-lotus.com/',
  },
]

Meteor.startup(function() {
  if (!Users.find().fetch().length) {
    console.info('// Creating demo user')
    const demoUser = {
      username: 'DemoUser',
      email: 'demo@user.com',
      isDummy: true,
    }
    newMutation({
      collection: Users,
      document: demoUser,
      validate: false,
    })
  }
  const currentUser = Users.findOne()
  if (!Posts.find().fetch().length) {
    console.info('// Creating dummy posts')
    seedData.forEach(post => newMutation({
      action: 'posts.new',
      collection: Posts,
      document: post,
      currentUser,
      validate: false,
    }))
  }
})

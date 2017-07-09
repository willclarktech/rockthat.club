import { newMutation } from 'meteor/vulcan:core'
import Categories from 'meteor/vulcan:categories'
import Users from 'meteor/vulcan:users'
import Posts from '../modules/posts/collection'

const seedData = [
  {
    title: 'Led Zeppelin',
    thumbnailUrl: 'https://pbs.twimg.com/profile_images/2585954566/8ev9krfvkxb8nz00cg77_400x400.jpeg',
    soundcloud: '88796626',
    // url: 'http://www.ledzeppelin.com/',
  },
  {
    title: 'Dolly Parton',
    thumbnailUrl: 'https://pbs.twimg.com/profile_images/751068635297447936/9b2iGzv7_400x400.jpg',
    soundcloud: '94792915',
    // url: 'https://dollyparton.com/',
  },
  {
    title: 'Flying Lotus',
    thumbnailUrl: 'https://pbs.twimg.com/profile_images/819979189231054848/DPZuZq3z_400x400.jpg',
    soundcloud: '196380',
    // url: 'http://www.flying-lotus.com/',
  },
]

const categoryNames = {
  'Led Zeppelin': 'Rock',
  'Dolly Parton': 'Acoustic',
  'Flying Lotus': 'Electronic',
}

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
      document: {
        ...post,
        categories: [
          Categories.findOne({ name: categoryNames[post.title] })._id,
        ],
      },
      currentUser,
      validate: false,
    }))
  }
})

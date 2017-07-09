import { newMutation } from 'meteor/vulcan:core'
import Categories from 'meteor/vulcan:categories'
import Users from 'meteor/vulcan:users'
import Posts from '../modules/posts/collection'

const seedData = [
  {
    title: 'Dolly Parton',
    thumbnailUrl: 'https://pbs.twimg.com/profile_images/751068635297447936/9b2iGzv7_400x400.jpg',
    canBring: 80,
    minimumCharge: 240,
    soundcloud: '94792915',
    // url: 'https://dollyparton.com/',
  },
  {
    title: 'Flying Lotus',
    thumbnailUrl: 'https://pbs.twimg.com/profile_images/819979189231054848/DPZuZq3z_400x400.jpg',
    canBring: 25,
    minimumCharge: 10,
    soundcloud: '196380',
    // url: 'http://www.flying-lotus.com/',
  },
  {
    title: 'Led Zeppelin',
    thumbnailUrl: 'https://pbs.twimg.com/profile_images/2585954566/8ev9krfvkxb8nz00cg77_400x400.jpeg',
    canBring: 350,
    minimumCharge: 120,
    soundcloud: '88796626',
    // url: 'http://www.ledzeppelin.com/',
  },
  {
    title: 'Stephen Paul Taylor',
    thumbnailUrl: 'https://pbs.twimg.com/profile_images/791540613778968576/Vhz3X0dh_400x400.jpg',
    canBring: 20,
    minimumCharge: 20,
    soundcloud: '6685907',
  },
  {
    title: 'Todd Terje',
    thumbnailUrl: 'https://pbs.twimg.com/profile_images/426312004689600513/gr32hszf_400x400.png',
    canBring: 15,
    minimumCharge: 45,
    soundcloud: '48903',
  },
]

const categoryNames = {
  'Led Zeppelin': 'Rock',
  'Dolly Parton': 'Acoustic',
  'Flying Lotus': 'Electronic',
  'Stephen Paul Taylor': 'Alternative',
  'Todd Terje': 'Electronic',
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

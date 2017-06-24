const resolvers = {
  list: {
    name: 'artistsList',
    resolver(root, { terms = {} }, context) {
      console.log('IN RESOLVER')
      return context.Artists.find().fetch()
    },
  },
}

export default resolvers

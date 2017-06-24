const resolvers = {
  list: {
    name: 'artistsList',
    resolver(root, { terms = {} }, context) {
      return context.Artists.find().fetch()
    },
  },
}

export default resolvers

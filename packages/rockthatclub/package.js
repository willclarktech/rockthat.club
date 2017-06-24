Package.describe({
  name: 'rockthatclub',
})

Package.onUse(function(api) {
  api.use([
    'vulcan:core',
    'example-forum',
  ])

  api.mainModule('lib/server/main.js', 'server')
  api.mainModule('lib/client/main.js', 'client')
})

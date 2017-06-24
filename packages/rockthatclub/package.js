Package.describe({
  name: 'rockthatclub',
  summary: 'finde deinen Gig',
  version: '0.0.1',
  git: "https://github.com/willclarktech/rockthat.club.git"
})

Package.onUse(function(api) {
  api.use([
    'vulcan:core',
  ])

  api.mainModule('lib/server/main.js', 'server')
  api.mainModule('lib/client/main.js', 'client')
})

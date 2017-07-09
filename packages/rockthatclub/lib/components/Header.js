import React from 'react'
import PropTypes from 'prop-types'
import { withCurrentUser, getSetting, Components, registerComponent } from 'meteor/vulcan:core'

const LOGO_URL = getSetting('logoUrl')
const SITE_TITLE = getSetting('title', 'My App')
const TAGLINE = getSetting('tagline')

const Header = ({
  currentUser,
}) => (
  <div className="header-wrapper">

    <header className="header">

      <div className="logo">
        <Components.Logo logoUrl={LOGO_URL} siteTitle={SITE_TITLE} />
        {TAGLINE ? <h2 className="tagline">{TAGLINE}</h2> : null }
      </div>

      <div className="nav">

        <div className="nav-user">
          {!!currentUser ? <Components.UsersMenu /> : <Components.UsersAccountMenu />}
        </div>

        {currentUser && currentUser.isAdmin && (
          <div className="nav-new-post">
            <Components.PostsNewButton/>
          </div>
        )}

      </div>

    </header>
  </div>
)

Header.propTypes = {
  currentUser: PropTypes.object,
}

registerComponent('Header', Header, withCurrentUser)

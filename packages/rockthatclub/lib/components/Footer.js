import React from 'react'
import { replaceComponent } from 'meteor/vulcan:core'

const email = 'wadim@rockthat.club'
const href = `mailto:${email}`

const Footer = () => (
  <div className="footer">
    See an artist you like? Email <a href={href}>{email}</a> and we’ll put you in touch.
  </div>
)

replaceComponent('Footer', Footer)

import React from 'react'
import { replaceComponent } from 'meteor/vulcan:core'

const email = 'wadim@rockthat.club'
const href = `mailto:${email}`

const Footer = () => (
  <div className="footer">
    Need some help? Email <a href={href}>{email}</a>.
  </div>
)

replaceComponent('Footer', Footer)

import React from 'react'
import { replaceComponent } from 'meteor/vulcan:core'

const Footer = () => (
  <div className="footer">
    Something for the footer
  </div>
)

replaceComponent('Footer', Footer)

import React from 'react'

const Soundcloud = ({ soundcloudId }) => {
  const src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/${soundcloudId}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true`
  return (
    <iframe
      width="100%"
      height="450"
      scrolling="no"
      frameBorder="no"
      src={src}
    />
  )
}

export default Soundcloud

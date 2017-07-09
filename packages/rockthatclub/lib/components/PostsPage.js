import React from 'react'
import { Components, getRawComponent, replaceComponent } from 'meteor/vulcan:core'
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Posts from '../modules/posts/collection'
import Soundcloud from './Soundcloud'

const CanBring = ({ number }) => (
  <div>
    Can bring: {number} people
  </div>
)

const MinimumCharge = ({ value }) => (
  <div>
    Minimum charge: €{value}
  </div>
)

class PostsPage extends getRawComponent('PostsItem') {
  render() {
    if (this.props.loading) {

      return <div className="posts-page"><Components.Loading/></div>

    } else if (!this.props.document) {
      return <div className="posts-page"><FormattedMessage id="app.404"/></div>

    } else {
      const post = this.props.document;
      const {
        canBring,
        minimumCharge,
        soundcloud,
      } = post

      const htmlBody = {__html: post.htmlBody};

      return (
        <div className="posts-page">
          <Components.HeadTags url={Posts.getPageUrl(post, true)} title={post.title} image={post.thumbnailUrl} description={post.excerpt} />

          <Components.PostsItem post={post} currentUser={this.props.currentUser} />
          { soundcloud && (<Soundcloud soundcloudId={soundcloud} />)}
          { canBring && (<CanBring number={canBring} />)}
          { minimumCharge && (<MinimumCharge value={minimumCharge} />)}
          {post.htmlBody ? <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div> : null}

          <Components.PostsCommentsThread terms={{postId: post._id, view: 'postComments'}} />

        </div>
      )
    }
  }
}

replaceComponent('PostsPage', PostsPage)

import React from 'react'
import { Components, getRawComponent, replaceComponent } from 'meteor/vulcan:core'
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Posts from '../modules/posts/collection'
import Soundcloud from './Soundcloud'

class PostsPage extends getRawComponent('PostsItem') {
  render() {
    if (this.props.loading) {

      return <div className="posts-page"><Components.Loading/></div>

    } else if (!this.props.document) {
      return <div className="posts-page"><FormattedMessage id="app.404"/></div>

    } else {
      const post = this.props.document;

      const htmlBody = {__html: post.htmlBody};

      return (
        <div className="posts-page">
          <Components.HeadTags url={Posts.getPageUrl(post, true)} title={post.title} image={post.thumbnailUrl} description={post.excerpt} />

          <Components.PostsItem post={post} currentUser={this.props.currentUser} />
          { post.soundcloud && (
            <Soundcloud soundcloudId={post.soundcloud} />
          )}
          {post.htmlBody ? <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div> : null}

          <Components.PostsCommentsThread terms={{postId: post._id, view: 'postComments'}} />

        </div>
      )
    }
  }
}

replaceComponent('PostsPage', PostsPage)

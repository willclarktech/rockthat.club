import React from 'react'
import {
  Components,
  getRawComponent,
  replaceComponent,
} from 'meteor/vulcan:core'
import Posts from 'meteor/vulcan:posts'
import { FormattedMessage } from 'meteor/vulcan:i18n'
import { Link } from 'react-router'
import moment from 'moment'

class PostsItem extends getRawComponent('PostsItem') {
  render() {
     const {post} = this.props;

     let postClass = "posts-item";
     if (post.sticky) postClass += " posts-sticky";

     return (
       <div className={postClass}>

         <div className="posts-item-vote">
           <Components.Vote collection={Posts} document={post} currentUser={this.props.currentUser}/>
         </div>

         {post.thumbnailUrl ? <Components.PostsThumbnail post={post}/> : null}

         <div className="posts-item-content">

           <h3 className="posts-item-title">
             <Link to={Posts.getLink(post)} className="posts-item-title-link" target={Posts.getLinkTarget(post)}>
               {post.title}
             </Link>
             {this.renderCategories()}
           </h3>

           <div className="posts-item-meta">
             <div className="posts-item-date">{post.postedAt ? moment(new Date(post.postedAt)).fromNow() : <FormattedMessage id="posts.dateNotDefined"/>}</div>
             <div className="posts-item-comments">
               <Link to={Posts.getPageUrl(post)}>
                 {!post.commentCount || post.commentCount === 0 ? <FormattedMessage id="comments.count_0"/> :
                   post.commentCount === 1 ? <FormattedMessage id="comments.count_1" /> :
                     <FormattedMessage id="comments.count_2" values={{count: post.commentCount}}/>
                 }
               </Link>
             </div>
             {this.props.currentUser && this.props.currentUser.isAdmin ? <Components.PostsStats post={post} /> : null}
             {Posts.options.mutations.edit.check(this.props.currentUser, post) ? this.renderActions() : null}
           </div>

         </div>

         {this.renderCommenters()}

       </div>
     )
  }
}

replaceComponent('PostsItem', PostsItem)
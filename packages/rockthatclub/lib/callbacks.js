/*
Let's add a callback to the new post method that
appends a random emoji to the newly submitted post's title.
*/

import { addCallback } from 'meteor/vulcan:core';

// function PostsNewAddRandomEmoji (post, user) {
//
// 	post.title = post.title + " " +_.sample(["🎉", "💎", "☠", "⏱", "🎈", "⛱"])
//
// 	return post;
// }
// addCallback("posts.new.sync", PostsNewAddRandomEmoji);

function sortByPostedAt (parameters, terms) {
  return {
    selector: parameters.selector,
    options: {...parameters.options, sort: {postedAt: -1}}
  };
}

addCallback("posts.parameters", sortByPostedAt);

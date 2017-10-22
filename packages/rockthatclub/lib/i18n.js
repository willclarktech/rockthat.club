/*
	Let's add an international label to the field added in custom_fields.js
*/

import { addStrings } from 'meteor/vulcan:core';

addStrings('en', {
	"posts.color": "Color" // add a new one (collection.field: "Label")
});

addStrings('en', {
  'posts.new_post': 'Add artist page'
});

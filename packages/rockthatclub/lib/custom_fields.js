import { Posts } from 'meteor/example-forum';

/*
Let's assign a color to each post (why? cause we want to, that's why).
We'll do that by adding a custom field to the Posts collection.
Note that this requires our custom package to depend on vulcan:posts and vulcan:users.
*/

Posts.addField([
  {
    fieldName: 'soundcloud',
    fieldSchema: {
      type: String,
      control: 'text',
      optional: true,
      insertableBy: ['admins'],
      editableBy: ['admins'],
      viewableBy: ['members'],
    },
  },
  {
    fieldName: 'canBring',
    fieldSchema: {
      type: String,
      control: 'text',
      optional: true,
      insertableBy: ['admins'],
      editableBy: ['admins'],
      viewableBy: ['members'],
    },
  },
  {
    fieldName: 'minimumCharge',
    fieldSchema: {
      type: String,
      control: 'text',
      optional: true,
      insertableBy: ['admins'],
      editableBy: ['admins'],
      viewableBy: ['members'],
    },
  },
])

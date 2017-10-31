import { Posts } from 'meteor/example-forum';

Posts.removeField('url');

Posts.addField([
  {
    fieldName: 'soundcloud',
    fieldSchema: {
      type: String,
      control: 'text',
      optional: true,
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
    },
  },
  {
    fieldName: 'artistUrl',
    fieldSchema: {
      type: String,
      control: 'text',
      optional: true,
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
    },
  },
  {
    fieldName: 'thumbnailUrl',
    fieldSchema: {
      type: String,
      optional: true,
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
      hidden: false,
    }
  },
  {
    fieldName: 'canBring',
    fieldSchema: {
      type: String,
      control: 'text',
      optional: true,
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
    },
  },
  {
    fieldName: 'minimumCharge',
    fieldSchema: {
      type: String,
      control: 'text',
      optional: true,
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
    },
  },
])

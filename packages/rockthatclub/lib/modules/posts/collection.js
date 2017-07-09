import Posts from 'meteor/vulcan:posts'
import './fragments'
import './i18n/en_US'


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
      type: Number,
      control: 'number',
      optional: true,
      insertableBy: ['admins'],
      editableBy: ['admins'],
      viewableBy: ['members'],
    },
  },
  {
    fieldName: 'minimumCharge',
    fieldSchema: {
      type: Number,
      control: 'number',
      optional: true,
      insertableBy: ['admins'],
      editableBy: ['admins'],
      viewableBy: ['members'],
    },
  },
])

export default Posts

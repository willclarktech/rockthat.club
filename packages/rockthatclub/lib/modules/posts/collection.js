import Posts from 'meteor/vulcan:posts'
// import './fragments'
import './i18n/en_US'

Posts.addField(
  {
    fieldName: 'soundcloud',
    fieldSchema: {
      type: String,
      control: 'text', // use a select form control
      optional: true, // this field is not required
      insertableBy: ['admins'],
      editableBy: ['admins'],
      viewableBy: ['admins'],
    }
  })

export default Posts

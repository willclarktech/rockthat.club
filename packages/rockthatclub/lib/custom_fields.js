import { Posts } from 'meteor/example-forum';

Posts.removeField('url');

Posts.addField([
  {
    fieldName: 'soundcloud',
    fieldSchema: {
      type: String,
      label: 'Soundcloud ID',
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
      label: 'How many audience members do you expect to be able to bring?',
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
  {
    fieldName: 'equipmentNeeded',
    fieldSchema: {
      type: String,
      control: 'textarea',
      optional: true,
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
    },
  },
  {
    fieldName: 'zip',
    fieldSchema: {
      type: String,
      label: 'ZIP/Postal Code',
      optional: true,
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
      hidden: false,
    }
  },
  {
    fieldName: 'contactDetails',
    fieldSchema: {
      type: String,
      control: 'textarea',
      optional: true,
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
      hidden: false,
    }
  },
])

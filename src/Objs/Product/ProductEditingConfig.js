import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('Product', {
  title: 'Product',
  description: 'A product.',

  attributes: {
    title: {
      title: 'Title',
    },
    description: {
      title: 'Description',
    },
    image: {
      title: 'Image',
    },
    link: {
      title: 'Link to details',
    },
    price: {
      title: 'Price per item',
    },
    code: {
      title: 'Reference code',
      description: 'Format: ABC-1234',
    },
  },

  properties: ['title', 'description', 'image', 'link', 'price', 'code'],
  titleForContent: obj => obj.get('title'),
  descriptionForContent: obj => obj.get('code'),
  hideInSelectionDialogs: true,
});

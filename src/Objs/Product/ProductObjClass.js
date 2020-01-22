import * as Scrivito from 'scrivito';

Scrivito.provideObjClass('Product', {
  attributes: {
    title: 'string',
    description: 'html',
    image: 'reference',
    link: 'link',
    price: 'string',
    code: 'string',
  },
});

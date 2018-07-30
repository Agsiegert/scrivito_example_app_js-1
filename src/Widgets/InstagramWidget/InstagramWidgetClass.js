import * as Scrivito from 'scrivito';
Scrivito.provideWidgetClass('InstagramWidget', {
  attributes: {
    url: 'string',
    maxWidth: 'integer',
    hideCaption: ['enum', { values: ['yes', 'no'] }],
  },
});

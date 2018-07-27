import * as Scrivito from 'scrivito';

const FaqWidget = Scrivito.provideWidgetClass('FaqWidget', {
  attributes: {
    heading: 'string',
    body: 'widgetlist',
    labelHidden: 'string',
    labelDisclosed: 'string',
  },
});

export default FaqWidget;

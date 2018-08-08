import * as React from 'react';
import * as Scrivito from 'scrivito';
import InstagramEmbed from 'react-instagram-embed';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('InstagramWidget', ({ widget }) => {
  const instagramUrl = widget.get('url');

  if (!instagramUrl) {
    return (
      <InPlaceEditingPlaceholder center={true}>
        Use widget properties to input an Instagram Url 
      </InPlaceEditingPlaceholder>
    );
  }

  const width = widget.get('maxWidth');
  const caption = widget.get('hideCaption');
  
  return (
      <InstagramEmbed
        align="center"
        url={ instagramUrl }
        maxWidth={ width }
        hideCaption={ caption }
        containerTagName='div'
        protocol=''
      />
  );
});

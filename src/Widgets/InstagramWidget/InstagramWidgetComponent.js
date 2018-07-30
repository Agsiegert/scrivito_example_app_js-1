import * as React from 'react';
import * as Scrivito from 'scrivito';
import InstagramEmbed from 'react-instagram-embed';
import instagramPlaceholder from './instagramPlaceholder';

Scrivito.provideComponent('InstagramWidget', ({ widget }) => {
  const instagramUrl = widget.get('url');
  if (!instagramUrl && !Scrivito.isInPlaceEditingActive()) {
    return null;
  }


  const width = widget.get('maxwidth');
  const caption = widget.get('hideCaption');

  let style = {};
  if (Scrivito.isInPlaceEditingActive() && !instagramUrl ) {
    style = instagramPlaceholder;
  }
  return (
    <span style={ style }>
      <InstagramEmbed
        url={ instagramUrl }
        maxWidth={ width }
        hideCaption={ caption }
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </span>
  );
});

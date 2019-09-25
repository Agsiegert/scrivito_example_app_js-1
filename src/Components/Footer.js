import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "./InPlaceEditingPlaceholder";
import getHomepage from '../utils/getHomepage.js';
import LanguageSwitch from './Navigation/LanguageSwitch';

function Footer() {
  const root = getHomepage();

  console.log('footer', root);

  if (!root) {
    return null;
  }

  return (
    <>
      <InPlaceEditingPlaceholder block center>
        The footer starts here. There’s only one footer. It belongs to the
        homepage but is displayed on all other pages as well.
      </InPlaceEditingPlaceholder>
      <Scrivito.ContentTag content={root} attribute="footer" tag="footer" />
      <LanguageSwitch />
    </>
  );
}

export default Scrivito.connect(Footer);

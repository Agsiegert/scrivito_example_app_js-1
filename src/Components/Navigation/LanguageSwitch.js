import * as React from 'react';
import * as Scrivito from 'scrivito';
import getHomepage from '../../utils/getHomepage';

function LanguageSwitch() {
  const homepages = [...Scrivito.getClass('Homepage').all()];
  return (
    <ul className="nav navbar-nav">
      { homepages.map(homepage =>
        <li key={homepage.id()}>
          <Scrivito.LinkTag to={ homepage }>
            { homepage.path().substr(6, 2) }
          </Scrivito.LinkTag>
        </li>
      ) }
    </ul>
  );
}

export default Scrivito.connect(LanguageSwitch);

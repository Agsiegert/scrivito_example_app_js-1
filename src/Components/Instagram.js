import * as React from "react";
import * as Scrivito from "scrivito";
import Helmet from "react-helmet";

class Instagram extends React.Component {

  render() {

    return (
      <Helmet>
        <script async
          src="https://www.instagram.com/embed.js"
        />
      </Helmet>
    );
  }
}

export default Scrivito.connect(Instagram);

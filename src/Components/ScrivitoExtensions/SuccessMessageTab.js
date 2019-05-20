import * as React from "react";
import * as Scrivito from "scrivito";

class SuccessMessageTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { widget } = this.props;

    return (
      <div className="container-fluid pt-4">
        <Scrivito.ContentTag
          content={widget}
          attribute="successMessage"
        />
      </div>
    );
  }
}

Scrivito.registerComponent("SuccessMessageTab", SuccessMessageTab);

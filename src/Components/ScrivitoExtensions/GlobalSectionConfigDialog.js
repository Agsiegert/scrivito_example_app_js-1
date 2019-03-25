import * as React from "react";
import * as Scrivito from "scrivito";

function GlobalSectionConfigDialog() {
  const sectionConfig = Scrivito.Obj.getByPermalink("globalsectionconfig");
  const attributes = { body: "Content"};


  return (
    <div className="container-fluid pt-4">
      {Object.keys(attributes).map(key => (
        <div key={key} className="card mb-2">
          <div className="card-title strong ml-2 mr-2 mt-1">
            <span>{attributes[key]}</span>
          </div>
          <hr className="mt-0 mb-1" />
          <div className="pb-2">
            <Scrivito.ContentTag
              tag="div"
              content={sectionConfig}
              attribute={key}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

Scrivito.registerComponent("GlobalSectionConfigDialog", GlobalSectionConfigDialog);
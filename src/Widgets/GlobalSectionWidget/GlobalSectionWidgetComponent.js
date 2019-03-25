import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("GlobalSectionWidget", ({ widget }) => {
  const sectionConfig = Scrivito.Obj.getByPermalink("globalsectionconfig");

  return (
    <Scrivito.InPlaceEditingOff>
       <Scrivito.ContentTag tag="div" content={sectionConfig} attribute="body" />
    </Scrivito.InPlaceEditingOff>
  );
});
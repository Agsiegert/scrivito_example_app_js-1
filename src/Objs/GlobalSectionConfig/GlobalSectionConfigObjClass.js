import * as Scrivito from "scrivito";

const GlobalSectionConfig = Scrivito.provideObjClass("GlobalSectionConfig", {
  attributes: {
    body: ["widgetlist", { only: "SectionWidget" }],
  },
});

export default GlobalSectionConfig;

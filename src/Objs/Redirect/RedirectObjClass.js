import * as Scrivito from "scrivito";

const Redirect = Scrivito.provideObjClass("Redirect", {
  attributes: {
    childOrder: "referencelist",
    title: "string",
    link: "link",
  },
});

export default Redirect;

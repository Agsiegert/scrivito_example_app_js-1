import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";
import metadataAttributes from "../_metadataAttributes";

const ArticlePage = Scrivito.provideObjClass("ArticlePage", {
  attributes: {
    title: "string",
    headline: "string",
    image: "reference",
    image2: "reference",
    body: ["widgetlist", { only: ["TextWidget", "SectionWidget"] }],
    ...metadataAttributes,
  },
});

registerTextExtract("ArticlePage", [{ attribute: "headline", type: "string" }]);

export default ArticlePage;

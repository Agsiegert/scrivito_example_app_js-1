import * as Scrivito from "scrivito";
import PageObjIcon from "../../assets/images/page_obj.svg";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
  socialCardsPropertiesGroup,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("ArticlePage", {
  title: "Article Page",
  thumbnail: PageObjIcon,
  attributes: {
    ...metadataEditingConfigAttributes,
  },
  propertiesGroups: [socialCardsPropertiesGroup, metadataPropertiesGroup],
  initialContent: {
    ...metadataInitialContent,
  },
});

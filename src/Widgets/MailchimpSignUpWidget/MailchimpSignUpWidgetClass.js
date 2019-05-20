import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const MailchimpSignUpWidget = Scrivito.provideWidgetClass("MailchimpSignUpWidget", {
  attributes: {
    buttonText: "string",
    successMessage: "widgetlist",
  },
});

registerTextExtract("MailchimpSignUpWidget", [
  { attribute: "buttonText", type: "string" },
]);

export default MailchimpSignUpWidget;
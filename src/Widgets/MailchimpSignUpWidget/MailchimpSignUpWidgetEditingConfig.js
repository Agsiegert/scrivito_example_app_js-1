import * as Scrivito from "scrivito";
import HeadlineWidget from "../HeadlineWidget/HeadlineWidgetClass"

Scrivito.provideEditingConfig("MailchimpSignUpWidget", {
  title: "Mailchimp Sign Up",
  attributes: {
    buttonText: {
      title: "text for submit button",
    },
  },
  properties: [ "buttonText" ],
  propertiesGroups: [
    {
      title: "Success Message",
      component: "SuccessMessageTab",
    },
  ],
  initialContent: {
    buttonText: "Sign me up",
    successMessage: [
      new HeadlineWidget({ headline: "Thank you for signing up!" }),
    ],
  },
});

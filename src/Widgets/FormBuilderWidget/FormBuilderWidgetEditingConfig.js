import * as Scrivito from "scrivito";
import FormWidgetIcon from "../../assets/images/contact_form_widget.svg";
import FormFieldTextWidget from "../FormFieldTextWidget/FormFieldTextWidgetClass";
import FormColumnContainerWidget from "../FormColumnContainerWidget/FormColumnContainerWidgetClass";
import FormColumnWidget from "../FormColumnWidget/FormColumnWidgetClass";
import FormFieldTextareaWidget from "../FormFieldTextareaWidget/FormFieldTextareaWidgetClass";
import FormFieldCheckboxWidget from "../FormFieldCheckboxWidget/FormFieldCheckboxWidgetClass";
import SpaceWidget from "../SpaceWidget/SpaceWidgetClass";

Scrivito.provideEditingConfig("FormBuilderWidget", {
  title: "Form Builder",
  thumbnail: FormWidgetIcon,
  attributes: {

    buttonText: {
      title: "Submit button text",
      description: "Default: Submit",
    },
    action: {
      title: "Form action",
      description: "Define action URL",
    },
    backgroundColor: {
      title: "Background color",
      description: "Default: White",
      values: [
        { value: "white", title: "White" },
        { value: "transparent", title: "Transparent" },
      ],
    },
  },
  properties: ["buttonText", "action", "backgroundColor", "includeBotField"],
  initialContent: {
    buttonText: "Submit form",
    backgroundColor: "white",
    items: [
      new FormColumnContainerWidget(
        {
          columns: [
            new FormColumnWidget({
              colSize: 6,
              content: [
                new FormFieldTextWidget({
                  name: "firstName",
                  label: "First name",
                  required: "yes",
                  placeholder: "Your name"
                }),
                new FormFieldTextWidget({
                  name: "email",
                  label: "Email Address",
                  required: "yes",
                  type: "email",
                  placeholder: "Your email address"
                })
              ]
            }),
            new FormColumnWidget({
              colSize: 6,
              content: [
                new FormFieldTextWidget({
                  name: "surname",
                  label: "Surname",
                  required: "yes",
                  placeholder: "Your last name"
                }),
                new FormFieldTextWidget({
                  name: "company",
                  label: "Company (Optional)",
                  required: "no",
                  type: "text",
                  placeholder: "Your company"
                })
              ]
            })
          ]
        }),
      new FormFieldTextareaWidget({
        name: "message",
        label: "Message",
        required: "yes",
        placeholder: "Your message"
      }),
      new FormFieldCheckboxWidget({
        name: "optin",
        required: "yes",
      }),
      new SpaceWidget({size: 2})
    ]
  },
});

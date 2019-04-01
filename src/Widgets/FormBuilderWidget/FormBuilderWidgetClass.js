import * as Scrivito from "scrivito";

const FormBuilderWidget = Scrivito.provideWidgetClass("FormBuilderWidget", {
  attributes: {
    items: ["widgetlist", {
      only: [
        "FormFieldTextWidget",
        "FormFieldCheckboxWidget",
        "FormFieldRadioWidget",
        "FormFieldSelectWidget",
        "FormFieldTextareaWidget",
        "SpaceWidget",
        "TextWidget",
        "HeadlineWidget",
        "FormColumnContainerWidget"
      ]
    }],
    buttonText: "string",
    action: "string",
    backgroundColor: ["enum", { values: ["white", "transparent"] }],
  },
});

export default FormBuilderWidget;

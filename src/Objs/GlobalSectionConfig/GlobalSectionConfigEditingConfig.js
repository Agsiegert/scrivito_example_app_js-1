import * as Scrivito from "scrivito";
import HeadlineWidget from "../../Widgets/HeadlineWidget/HeadlineWidgetClass";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";

Scrivito.provideEditingConfig("GlobalSectionConfig", {
  title: "Global Section Config",
  hideInSelectionDialogs: true,
  initialContent: {
    body: [
      new SectionWidget({
        content: [new HeadlineWidget({ style: "h1" })],
      }),
    ],
  },
});
